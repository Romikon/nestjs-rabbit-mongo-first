import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://roman:Aa135246@cluster0.sjrjmmm.mongodb.net/'),
    UserModule,
  ],
})
export class AppModule {}
