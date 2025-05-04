import { UserService } from './user.service';
import { CreateUserDto } from 'src/dto/create.user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("../schemas/user.schema").User>;
}
