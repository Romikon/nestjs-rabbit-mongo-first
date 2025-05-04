import { Model } from 'mongoose';
import { CreateUserDto } from 'src/dto/create.user.dto';
import { User } from 'src/schemas/user.schema';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
}
