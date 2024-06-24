import { injectable } from 'inversify';
import { UserLoginDto } from './dto/user.login.dto';
import { UserRegisterDto } from './dto/user.register.dto';
import { User } from './user.entity';
import { IUsersService } from './users.service.interface';

@injectable()
export class UsersService implements IUsersService {
	async createUser({ name, email, password }: UserRegisterDto): Promise<User | null> {
		const newUser = new User(email, name);
		await newUser.setPassword(password);
		return null;
		// check if it exists
		// if exists - return null
		// if not - create user
	}
	async validateUser({ name, email, password }: UserLoginDto): Promise<boolean> {
		return true;
	}
}
