import { Request, Response, NextFunction } from "express";
import { IExceptionFilter } from "./exception.filter.interface";
import { HTTPError } from "./http-error.class";
import { inject, injectable } from "inversify";
import { ILogger } from "../logger/logger.interface";
import "reflect-metadata";
import { TYPES } from "../types";

@injectable()
export class ExceptionFilter implements IExceptionFilter {
  constructor(@inject(TYPES.ILogger) private logger: ILogger) {}
  catch(
    err: Error | HTTPError,
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    if (err instanceof HTTPError) {
      this.logger.error(
        `[${err.context}] Error ${err.statusCode}: ${err.message}`,
      );
      res.status(err.statusCode).send({ err: err.message });
    } else {
      this.logger.error(err.message);
      res.status(500).send({ err: err.message });
    }
  }
}
