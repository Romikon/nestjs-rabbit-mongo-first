import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  declare id: number;

  @Prop({ type: Object })
  data: {
    name: string;
    surname: string;
    age: number;
  };

  @Prop({ type: Object })
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

export const UserSchema = SchemaFactory.createForClass(User);
