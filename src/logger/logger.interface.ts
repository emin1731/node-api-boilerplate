import { Logger } from 'tslog';

export interface ILogger {
	logger: Logger<any>;
	log: (...args: unknown[]) => void;
	error: (...args: unknown[]) => void;
	warn: (...args: unknown[]) => void;
}
