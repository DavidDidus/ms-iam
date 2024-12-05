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
    async createRelationship(userId: string, machineId: string): Promise<UserMachine> {
        const existingRelationship = await this.userMachineModel
          .findOne({ user: userId, machine: machineId })
          .exec();
      
        if (existingRelationship) {
          throw new Error('Esta relación ya existe.');
        }
      
        const newUserMachine = new this.userMachineModel({ user: userId, machine: machineId });
        return newUserMachine.save();
      }
      
      async getMachinesByUser(userId: string): Promise<UserMachine[]> {
        return this.userMachineModel
          .find({ user: userId })
          .populate('machine') // Carga los datos de la máquina
          .exec();
      }

      async getUsersByMachine(machineId: string): Promise<UserMachine[]> {
        return this.userMachineModel
          .find({ machine: machineId })
          .populate('user') // Carga los datos del usuario
          .exec();
      }
      
      
}
