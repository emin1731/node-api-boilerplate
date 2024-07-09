import { UserModel } from '@prisma/client';
import { UserLoginDto } from './dto/user.login.dto';
import { UserRegisterDto } from './dto/user.register.dto';
import { User } from './user.entity';

export interface IUsersService {
	createUser: ({ name, email, password }: UserRegisterDto) => Promise<UserModel | null>;
	validateUser: ({ email, password }: UserLoginDto) => Promise<boolean>;
	getUserInfo: (email: string) => Promise<UserModel | null>;
}
