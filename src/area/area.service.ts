import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Area } from './area.schema';  

@Injectable()
export class AreaService {
    constructor(@InjectModel(Area.name) private areaModel: Model<Area>) {}

    async create(createAreaDto: any): Promise<Area> {
        const createrArea = new this.areaModel(createAreaDto);
        return createrArea.save();
    }

    async findAll(): Promise<Area[]> {
        return this.areaModel.find().exec();
    }

    async findOne(id: string): Promise<Area> {
        return this.areaModel.findById(id).exec();
    }

    async update(id: string, updateAreaDto: any): Promise<Area> {
        return this.areaModel.findByIdAndUpdate(id,updateAreaDto, {new: true}).exec();
    }

    async remove(id: string): Promise<Area> {
        return this.areaModel.findByIdAndDelete(id).exec();
    }

}
