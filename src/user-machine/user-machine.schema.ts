import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from '../user/user.schema';
import { Machine } from '../machine/machine.schema';

@Schema()
export class UserMachine extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true }) // Relación con User
  user: User;

  @Prop({ type: Types.ObjectId, ref: 'Machine', required: true }) // Relación con Machine
  machine: Machine;

  @Prop({ default: Date.now }) // Agregar un campo opcional, como fecha de asignación
  assignedAt: Date;
}

export const UserMachineSchema = SchemaFactory.createForClass(UserMachine);
