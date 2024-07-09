import { Request, Response, NextFunction } from 'express';
import { IMiddleware } from './middleware.interface';

export class GuardMiddleware implements IMiddleware {
	execute(req: Request, res: Response, next: NextFunction): void {
		if (req.user) {
			return next();
		}
		res.status(401).send({ error: 'Unauthorized user' });
	}
}
