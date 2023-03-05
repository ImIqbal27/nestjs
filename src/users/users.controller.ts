import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { LoginUserDto } from "./dto/login-user.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("/login")
  login(@Body() loginUserDto: LoginUserDto) {
    return this.usersService.login(loginUserDto);
  }

  @Post("/test")
  register(
    @Body()
    loginUserDto: {
      userId: string;
      email: string;
      fullName: string;
    }
  ) {
    return this.usersService.register(loginUserDto);
  }

  @Get("/all-users")
  findAll() {
    return this.usersService.findAll();
  }
}
