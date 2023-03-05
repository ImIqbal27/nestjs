import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      "mongodb+srv://iamhasan9501:cgizJ0uMb8PZ7NRB@cluster0.lkqzpdk.mongodb.net/?retryWrites=true&w=majority/nestmongodb1"
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
