import { Controller ,Get, Post,Body,Param,Delete,Put } from '@nestjs/common';
import { UserMachineService } from './user-machine.service';

@Controller('user-machine')
export class UserMachineController {
    constructor(private readonly userMachineService: UserMachineService) {}

    @Post()
    create(@Body() createUserMachineDto: any) {
        return this.userMachineService.create(createUserMachineDto);
    }

    @Get()
    findAll() {
        return this.userMachineService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userMachineService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateUserMachineDto: any) {
        return this.userMachineService.update(id, updateUserMachineDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.userMachineService.remove(id);
    }

}
