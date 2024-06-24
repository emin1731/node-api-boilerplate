import { UserLoginDto } from './dto/user.login.dto';
import { UserRegisterDto } from './dto/user.register.dto';
import { User } from './user.entity';

export interface IUsersService {
	createUser: ({ name, email, password }: UserRegisterDto) => Promise<User | null>;
	validateUser: ({ name, email, password }: UserLoginDto) => Promise<boolean>;
}
