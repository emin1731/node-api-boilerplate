import express, { Express } from "express";
import { Server } from "http";
import { UsersController } from "./users/users.controller";
import { ExceptionFilter } from "./errors/exception.filter";
import { ILogger } from "./logger/logger.interface";
import { inject, injectable } from "inversify";
import "reflect-metadata";
import { TYPES } from "./types";

@injectable()
export class App {
  app: Express;
  port: number;
  server: Server;

  constructor(
    @inject(TYPES.ILogger) private logger: ILogger,
    @inject(TYPES.UsersController) private userController: UsersController,
    @inject(TYPES.ExceptionFilter) private exceptionFilter: ExceptionFilter,
  ) {
    this.app = express();
    this.port = 8000;
  }
  useRoutes() {
    this.app.use("/users", this.userController.router);
  }

  useExceptionFilter() {
    this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter));
  }
  public async init() {
    this.useRoutes();
    this.useExceptionFilter();
    this.server = this.app.listen(this.port);
    this.logger.log(`Server is running on http://localhost:${this.port}`);
  }
}
