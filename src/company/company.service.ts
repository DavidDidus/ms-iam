import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company} from './company.schema';

@Injectable()
export class CompanyService {
    constructor(@InjectModel(Company.name) private companyModel: Model<Company>) {}

    async create(createCompanyDto: any): Promise<Company> {
        const createrCompany = new this.companyModel(createCompanyDto);
        return createrCompany.save();
    }

    async findAll(): Promise<Company[]> {
        return this.companyModel.find().exec();
    }

    async findOne(id: string): Promise<Company> {
        return this.companyModel.findById(id).exec();
    }

    async update(id: string, updateCompanyDto: any): Promise<Company> {
        return this.companyModel.findByIdAndUpdate(id,updateCompanyDto, {new: true}).exec();
    }

    async remove(id: string): Promise<Company> {
        return this.companyModel.findByIdAndDelete(id).exec();
    }
}
