import { App } from "./app";
import { LoggerService } from "./logger/logger.service";
import { UsersController } from "./users/users.controller";
import { ExceptionFilter } from "./errors/exception.filter";
import { Container } from "inversify";
import { ILogger } from "./logger/logger.interface";
import { IExceptionFilter } from "./errors/exception.filter.interface";
import { TYPES } from "./types";

const appContainer = new Container();
appContainer.bind<ILogger>(TYPES.ILogger).to(LoggerService);
appContainer.bind<IExceptionFilter>(TYPES.ExceptionFilter).to(ExceptionFilter);
appContainer.bind<UsersController>(TYPES.UsersController).to(UsersController);
appContainer.bind<App>(TYPES.Application).to(App);
const app = appContainer.get<App>(TYPES.Application);
app.init();

export { app, appContainer };
