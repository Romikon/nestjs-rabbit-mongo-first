import { Document } from 'mongoose';
export declare class User extends Document {
    id: number;
    data: {
        name: string;
        surname: string;
        age: number;
    };
    bank: {
        card: {
            card_number: string;
            expire_date: string;
            cvv: number;
        };
        issuance_day: string;
        balance: {
            amount: number;
            unit: string;
        };
    };
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, Document<unknown, any, User, any> & User & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, Document<unknown, {}, import("mongoose").FlatRecord<User>, {}> & import("mongoose").FlatRecord<User> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
