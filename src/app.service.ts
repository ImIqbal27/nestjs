// import { Injectable } from '@nestjs/common';
import { Injectable } from "@nestjs/common/decorators";
import { Constants } from "./utils/Constants";

@Injectable()
export class AppService {
  getHello(): string {
    return `Welcome ${Constants.APP_NAME}`;
  }
}
