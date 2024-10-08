import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

@Schema()
export class Company extends Document {
    @Prop({required: true})
    name: string;
    
    @Prop()
    address: string;

    @Prop()
    website: string;

    }
export const CompanySchema = SchemaFactory.createForClass(Company);