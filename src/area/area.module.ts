import { Module } from '@nestjs/common';
import { AreaService } from './area.service';
import { AreaController } from './area.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Area, AreaSchema } from './area.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Area.name, schema: AreaSchema }])],
  providers: [AreaService],
  controllers: [AreaController]
})
export class AreaModule {}
