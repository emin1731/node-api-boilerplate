import { App } from './app';
import { Container, ContainerModule, interfaces } from 'inversify';
import { TYPES } from './types';

import { LoggerService } from './logger/logger.service';
import { ILogger } from './logger/logger.interface';
import { ExceptionFilter } from './errors/exception.filter';
import { IExceptionFilter } from './errors/exception.filter.interface';
import { UsersController } from './users/users.controller';
import { IUsersController } from './users/users.controller.interface';
import { PrismaService } from './database/prisma.service';
import { UsersService } from './users/users.service';
import { IUsersService } from './users/users.service.interface';
import { ConfigService } from './config/config.service';
import { IConfigService } from './config/config.service.interface';
import { UsersRepository } from './users/users.repository';
import { IUsersRepository } from './users/users.repository.interface';

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<ILogger>(TYPES.ILogger).to(LoggerService).inSingletonScope();
	bind<IExceptionFilter>(TYPES.ExceptionFilter).to(ExceptionFilter);
	bind<IUsersController>(TYPES.IUsersController).to(UsersController);
	bind<IUsersService>(TYPES.UserService).to(UsersService);
	bind<App>(TYPES.Application).to(App);
	bind<PrismaService>(TYPES.PrismaService).to(PrismaService).inSingletonScope();
	bind<IConfigService>(TYPES.IConfigService).to(ConfigService).inSingletonScope();
	bind<IUsersRepository>(TYPES.UsersRepository).to(UsersRepository).inSingletonScope();
});

export interface IBootstrapReturn {
	app: App;
	appContainer: Container;
}

async function bootstrap(): Promise<IBootstrapReturn> {
	const appContainer = new Container();
	appContainer.load(appBindings);
	const app = appContainer.get<App>(TYPES.Application);
	await app.init();
	return { app, appContainer };
}

export const boot = bootstrap();
