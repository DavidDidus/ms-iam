import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { AreaModule } from './area/area.module';
import { UserModule } from './user/user.module';
import { MachineModule } from './machine/machine.module';
import { UserMachineModule } from './user-machine/user-machine.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    CompanyModule,
    AreaModule, 
    UserModule, 
    MachineModule, 
    UserMachineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
