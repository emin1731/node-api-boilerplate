import { Logger } from "tslog";
export class LoggerService {
  public logger: Logger<any>;

  constructor() {
    this.logger = new Logger();
  }
  log(...args: unknown[]) {
    this.logger.info(...args);
  }
  error(...args: unknown[]) {
    this.logger.error(...args);
  }
  warn(...args: unknown[]) {
    this.logger.warn(...args);
  }
}
