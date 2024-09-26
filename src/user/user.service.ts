import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async create(createUserDto: any): Promise<User> {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(createUserDto.password, salt);

        const newUser = new this.userModel({
        ...createUserDto,
        password: hashedPassword, // Guardar la contraseña hasheada
        });

        return newUser.save();
    }

    

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findOne(id: string): Promise<User> {
        return this.userModel.findById(id).exec();
    }

    async update(id: string, updateUserDto: any): Promise<User | null> {
        if (updateUserDto.password) {
            const salt = await bcrypt.genSalt(10);
            updateUserDto.password = await bcrypt.hash(updateUserDto.password, salt); // Hashear nueva contraseña
          }
          return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
    }

    async remove(id: string): Promise<User> {
        return this.userModel.findByIdAndDelete(id).exec();
    }

    async findByUsername(username: string): Promise<User | null> {
        return this.userModel.findOne({ username: username }).exec();
    }

}
