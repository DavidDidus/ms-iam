import { Controller,Get, Post,Body,Param,Delete,Put } from '@nestjs/common';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) {}

    @Post()
    create(@Body() createCompanyDto: any) {
        return this.companyService.create(createCompanyDto);
    }

    @Get()
    findAll() {
        return this.companyService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.companyService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCompanyDto: any) {
        return this.companyService.update(id, updateCompanyDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.companyService.remove(id);
    }
}
