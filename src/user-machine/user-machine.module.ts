import { Module } from '@nestjs/common';
import { UserMachineService } from './user-machine.service';
import { UserMachineController } from './user-machine.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserMachine, UserMachineSchema } from './user-machine.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: UserMachine.name, schema: UserMachineSchema }])],
  providers: [UserMachineService],
  controllers: [UserMachineController]
})
export class UserMachineModule {}
