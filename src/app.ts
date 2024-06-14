import express, { Express } from "express";
import { Server } from "http";
import { LoggerService } from "./logger/logger.service";
import { UsersController } from "./users/users.controller";

export class App {
  app: Express;
  port: number;
  server: Server;
  logger: LoggerService;
  userController: UsersController;

  constructor(logger: LoggerService, userController: UsersController) {
    this.app = express();
    this.port = 8000;
    this.logger = logger;
    this.userController = userController;
  }
  useRoutes() {
    this.app.use("/users", this.userController.router);
  }
  public async init() {
    this.useRoutes();
    this.server = this.app.listen(this.port);
    this.logger.log(`Server is running on http://localhost:${this.port}`);
  }
}
