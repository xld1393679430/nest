import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './server/user/user.module';

const DbModule = MongooseModule.forRoot('mongodb://localhost/test')

@Module({
  imports: [DbModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
