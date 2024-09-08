import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

@Schema()
export class User extends Document {
    @Prop({required: true})
    name: string;
    
    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    role: string;

    @Prop()
    company: string;

    @Prop()
    area: string;

    @Prop()
    machine: string;
    }

export const UserSchema = SchemaFactory.createForClass(User);