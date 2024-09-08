import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

@Schema()
export class Machine extends Document {
    @Prop({required: true})
    name: string;
    
    @Prop()
    description: string;

    }

export const MachineSchema = SchemaFactory.createForClass(Machine);