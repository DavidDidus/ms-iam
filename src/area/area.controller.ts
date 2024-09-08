import { Controller ,Get, Post,Body,Param,Delete,Put } from '@nestjs/common';
import { AreaService } from './area.service';

@Controller('area')
export class AreaController {
    constructor(private readonly areaService: AreaService) {}

    @Post()
    create(@Body() createAreaDto: any) {
        return this.areaService.create(createAreaDto);
    }

    @Get()
    findAll() {
        return this.areaService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.areaService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateAreaDto: any) {
        return this.areaService.update(id, updateAreaDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.areaService.remove(id);
    }
}
