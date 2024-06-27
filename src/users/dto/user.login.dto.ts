import { IsEmail, IsString } from 'class-validator';

export class UserLoginDto {
	@IsEmail({}, { message: 'Not valid email address' })
	email: string;

	@IsString({ message: 'Not valid password' })
	password: string;
}
