import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { AreaModule } from './area/area.module';
import { UserModule } from './user/user.module';
import { MachineModule } from './machine/machine.module';
import { UserMachineModule } from './user-machine/user-machine.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:admin@ms-iam.pxztx.mongodb.net/?retryWrites=true&w=majority&appName=ms-iam'),
    CompanyModule,
    AreaModule, 
    UserModule, 
    MachineModule, 
    UserMachineModule,
    AuthModule,
    HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
