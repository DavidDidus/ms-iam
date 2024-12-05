import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Machine } from './machine.schema';

@Injectable()
export class MachineService {
    constructor(@InjectModel(Machine.name) private machineModel: Model<Machine>) {}

    async create(createMachineDto: any): Promise<Machine> {
        const { name, description } = createMachineDto;
      
        // Validar el formato de la patente (ejemplo: formato chileno)
        const isValidPatent = /^[A-Z]{2,3}-\d{2,3}$/.test(name); // Ejemplo: XX-123 o XXX-123
        if (!isValidPatent) {
          throw new Error('El formato de la patente no es válido. Ejemplo válido: XX-123.');
        }
      
        if (!description || description.trim() === '') {
          throw new Error('La descripción del vehículo no puede estar vacía.');
        }
      
        const newMachine = new this.machineModel(createMachineDto);
        return newMachine.save();
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
