import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { LivresService } from './livres.service';
import { CreateLivreDto } from './dto_livre/create-livre.dto';

@Controller('livres')
export class LivresController {
    constructor(private readonly livresService: LivresService) { }

    @Get()
    findAll() {
        return this.livresService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.livresService.findOne(+id);
    }

    @Post()
    create(@Body() createLivreDto: CreateLivreDto) {
        return this.livresService.create(createLivreDto);
    }
}
