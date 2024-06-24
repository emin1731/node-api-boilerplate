import { Request, Response, NextFunction, Router } from 'express';
import { IMiddleware } from './middleware.interface';

export interface IControllerRoute {
	path: string;
	function: (req: Request, res: Response, next: NextFunction) => void;
	// method: "get" | "post" | "delete" | "put";
	method: keyof Pick<Router, 'get' | 'post' | 'delete' | 'put'>;
	middleware?: IMiddleware[];
}

export type ExpressReturnType = Response<any, Record<string, any>>;
