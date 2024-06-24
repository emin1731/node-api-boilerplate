import { inject, injectable } from 'inversify';
import { UserLoginDto } from './dto/user.login.dto';
import { UserRegisterDto } from './dto/user.register.dto';
import { User } from './user.entity';
import { IUsersService } from './users.service.interface';
import { IConfigService } from '../config/config.service.interface';
import { TYPES } from '../types';

@injectable()
export class UsersService implements IUsersService {
	constructor(@inject(TYPES.IConfigService) private configService: IConfigService) {}
	async createUser({ name, email, password }: UserRegisterDto): Promise<User | null> {
		const newUser = new User(email, name);
		const salt = this.configService.get('SALT');
		await newUser.setPassword(password, Number(salt));
		return null;
		// check if it exists
		// if exists - return null
		// if not - create user
	}
	async validateUser({ name, email, password }: UserLoginDto): Promise<boolean> {
		return true;
	}
}
