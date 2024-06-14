import { BaseController } from "../common/base.controller";
import { NextFunction, Request, Response } from "express";
import { LoggerService } from "../logger/logger.service";
import { HTTPError } from "../errors/http-error.class";

export class UsersController extends BaseController {
  constructor(logger: LoggerService) {
    super(logger);
    this.bindRoutes([
      {
        path: "/login",
        method: "post",
        function: this.login,
      },
      {
        path: "/register",
        method: "post",
        function: this.register,
      },
    ]);
  }
  login(req: Request, res: Response, next: NextFunction) {
    this.ok(res, "Login");
  }
  register(req: Request, res: Response, next: NextFunction) {
    // this.ok(res, "Register");
    next(new HTTPError("errororrrrr", 401));
  }
}
