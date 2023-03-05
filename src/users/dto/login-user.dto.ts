import { IsString, IsNotEmpty, IsEnum } from "class-validator"

export enum ITokenTypes {
    facebook = "facebook",
    google = "google",
}

export class LoginUserDto {
    @IsString()
    @IsNotEmpty()
    fullName: string

    @IsString()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    token: string

    @IsString()
    @IsNotEmpty()
    @IsEnum(ITokenTypes)
    tokenType: ITokenTypes
}

