import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

@Schema()
export class UserMachine extends Document {
    @Prop({required: true})
    user: string;
    
    @Prop()
    machine: string;

    }

export const UserMachineSchema = SchemaFactory.createForClass(UserMachine);