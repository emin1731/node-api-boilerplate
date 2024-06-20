import { BaseController } from '../common/base.controller';
import { NextFunction, Request, Response } from 'express';
import { HTTPError } from '../errors/http-error.class';
import { inject, injectable } from 'inversify';
import { ILogger } from '../logger/logger.interface';
import 'reflect-metadata';
import { TYPES } from '../types';
import { IUsersController } from './users.controller.interface';

@injectable()
export class UsersController extends BaseController implements IUsersController {
	constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
		super(loggerService);
		this.bindRoutes([
			{
				path: '/login',
				method: 'post',
				function: this.login,
			},
			{
				path: '/register',
				method: 'post',
				function: this.register,
			},
		]);
	}

	login(req: Request, res: Response, next: NextFunction): void {
		this.ok(res, 'Login');
	}

	register(req: Request, res: Response, next: NextFunction): void {
		// this.ok(res, "Register");
		next(new HTTPError('errororrrrr', 401));
	}
}
