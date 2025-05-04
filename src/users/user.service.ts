import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CloudAMQP } from 'src/amqp/amqp';
import { CreateUserDto } from 'src/dto/create.user.dto';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(createUserDto);
    const message = new CloudAMQP();
    await message.sendMessage(createUserDto);
    console.log("Send!");
    return newUser.save();
  }

}
