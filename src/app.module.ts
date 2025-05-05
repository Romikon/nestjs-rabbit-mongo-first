import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://rmaiorkhak:0y5xuKvDibCETA6F@test4.xhcin9l.mongodb.net/'),
    UserModule,
  ],
})
export class AppModule {}
