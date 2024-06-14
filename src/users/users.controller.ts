import { BaseController } from "../common/base.controller";
import { NextFunction, Request, Response } from "express";
import { LoggerService } from "../logger/logger.service";

export class UsersController extends BaseController {
  login(req: Request, res: Response, next: NextFunction) {
    this.ok(res, "Login");
  }
  register(req: Request, res: Response, next: NextFunction) {
    this.ok(res, "Register");
  }
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
}
