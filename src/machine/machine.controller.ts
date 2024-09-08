import { Controller,Get, Post,Body,Param,Delete,Put  } from '@nestjs/common';
import { MachineService } from './machine.service';

@Controller('machine')
export class MachineController {
    constructor(private readonly machineService: MachineService) {}

    @Post()
    create(@Body() createMachineDto: any) {
        return this.machineService.create(createMachineDto);
    }

    @Get()
    findAll() {
        return this.machineService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.machineService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateMachineDto: any) {
        return this.machineService.update(id, updateMachineDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.machineService.remove(id);
    }
}
