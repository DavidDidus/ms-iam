import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserMachine } from './user-machine.schema';


@Injectable()
export class UserMachineService {
    constructor(@InjectModel(UserMachine.name) private userMachineModel: Model<UserMachine>) {}

    async create(createUserMachineDto: any): Promise<UserMachine> {
        const createrUserMachine = new this.userMachineModel(createUserMachineDto);
        return createrUserMachine.save();
    }

    async findAll(): Promise<UserMachine[]> {
        return this.userMachineModel.find().exec();
    }

    async findOne(id: string): Promise<UserMachine> {
        return this.userMachineModel.findById(id).exec();
    }

    async update(id: string, updateUserMachineDto: any): Promise<UserMachine> {
        return this.userMachineModel.findByIdAndUpdate(id,updateUserMachineDto, {new: true}).exec();
    }

    async remove(id: string): Promise<UserMachine> {
        return this.userMachineModel.findByIdAndDelete(id).exec();
    }
}
