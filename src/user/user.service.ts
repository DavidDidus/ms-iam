import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';


@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async create(createUserDto: any): Promise<User> {
        const createrUser = new this.userModel(createUserDto);
        return createrUser.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findOne(id: string): Promise<User> {
        return this.userModel.findById(id).exec();
    }

    async update(id: string, updateUserDto: any): Promise<User> {
        return this.userModel.findByIdAndUpdate(id,updateUserDto, {new: true}).exec();
    }

    async remove(id: string): Promise<User> {
        return this.userModel.findByIdAndDelete(id).exec();
    }
}
