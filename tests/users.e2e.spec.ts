import { boot } from '../src/main';
import { App } from '../src/app';
import request from 'supertest';

let applicaiton: App;

beforeAll(async () => {
	const { app } = await boot;
	applicaiton = app;
});

describe('Users e2e', () => {
	it('Register - error', async () => {
		const res = await request(applicaiton.app)
			.post('/users/register')
			.send({ email: 'demo@gmail.ru', password: '1' });

		expect(res.statusCode).toBe(422);
	});
	it('Login - success', async () => {
		const res = await request(applicaiton.app)
			.post('/users/login')
			.send({ email: 'emin@gmail.com', password: 'password' });

		expect(res.body.jwt).not.toBeUndefined();
	});
	it('Login - error', async () => {
		const res = await request(applicaiton.app)
			.post('/users/login')
			.send({ email: 'emin@gmail.com', password: 'unknown' });

		expect(res.statusCode).toBe(401);
	});
	it('Info - success', async () => {
		const login = await request(applicaiton.app)
			.post('/users/login')
			.send({ email: 'emin@gmail.com', password: 'password' });
		const res = await request(applicaiton.app)
			.get('/users/info')
			.set('Authorization', `Bearer ${login.body.jwt}`);

		expect(res.body.email).toBe('emin@gmail.com');
	});
	it('Info - error', async () => {
		const login = await request(applicaiton.app)
			.post('/users/login')
			.send({ email: 'emin@gmail.com', password: 'password' });
		const res = await request(applicaiton.app).get('/users/info').set('Authorization', `Bearer 1`);

		expect(res.status).toBe(401);
	});
});

afterAll(() => {
	applicaiton.close();
});
