import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Machine } from './machine.schema';

@Injectable()
export class MachineService {
    constructor(@InjectModel(Machine.name) private machineModel: Model<Machine>) {}

    async create(createMachineDto: any): Promise<Machine> {
        const createrMachine = new this.machineModel(createMachineDto);
        return createrMachine.save();
    }

    async findAll(): Promise<Machine[]> {
        return this.machineModel.find().exec();
    }

    async findOne(id: string): Promise<Machine> {
        return this.machineModel.findById(id).exec();
    }

    async update(id: string, updateMachineDto: any): Promise<Machine> {
        return this.machineModel.findByIdAndUpdate(id,updateMachineDto, {new: true}).exec();
    }

    async remove(id: string): Promise<Machine> {
        return this.machineModel.findByIdAndDelete(id).exec();
    }

}
