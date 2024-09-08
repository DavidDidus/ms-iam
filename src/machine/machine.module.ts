import { Module } from '@nestjs/common';
import { MachineService } from './machine.service';
import { MachineController } from './machine.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Machine, MachineSchema } from './machine.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Machine.name, schema: MachineSchema }])],
  providers: [MachineService],
  controllers: [MachineController]
})
export class MachineModule {}
