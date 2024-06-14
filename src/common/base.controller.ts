import { Response, Router } from "express";
import { LoggerService } from "../logger/logger.service";
import { IControllerRoute } from "./routes.interface";
export abstract class BaseController {
  private readonly _router: Router;

  constructor(private logger: LoggerService) {
    this._router = Router();
  }
  get router() {
    return this._router;
  }
  public send<T>(res: Response, code: number, message: T) {
    res.type("application/json");
    return res.status(code).json(message);
  }

  public ok<T>(res: Response, message: T) {
    this.send<T>(res, 200, message);
  }

  public created(res: Response) {
    return res.sendStatus(201);
  }
  protected bindRoutes(routes: IControllerRoute[]) {
    for (const route of routes) {
      this.logger.log(`[${route.method}] ${route.path}`);
      const handler = route.function.bind(this);
      this.router[route.method](route.path, handler);
    }
  }
}
