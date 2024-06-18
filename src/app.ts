import express, { Express } from "express";
import { Server } from "http";
import { UsersController } from "./users/users.controller";
import { ExceptionFilter } from "./errors/exception.filter";
import { ILogger } from "./logger/logger.interface";

export class App {
  app: Express;
  port: number;
  server: Server;
  logger: ILogger;
  userController: UsersController;
  exceptionFilter: ExceptionFilter;

  constructor(
    logger: ILogger,
    userController: UsersController,
    exceptionFilter: ExceptionFilter,
  ) {
    this.app = express();
    this.port = 8000;
    this.logger = logger;
    this.userController = userController;
    this.exceptionFilter = exceptionFilter;
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
