import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'Not valid email address' })
	email: string;

	@IsString({ message: 'Not valid name' })
	name: string;

	@IsString({ message: 'Not valid password' })
	password: string;
}
