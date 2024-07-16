import type { Config } from 'jest';

const config: Config = {
	verbose: true,
	preset: 'ts-jest',
	testRegex: '.e2e.spec.ts',
};

export default config;
