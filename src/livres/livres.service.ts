import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Livre } from './livres.entity';
import { CreateLivreDto } from './dto_livre/create-livre.dto';

@Injectable()
export class LivresService {
    constructor(
        @InjectRepository(Livre)
        private readonly livreRepository: Repository<Livre>,
    ) { }

    async findAll(): Promise<Livre[]> {
        return this.livreRepository.find();
    }

    async findOne(id: number): Promise<Livre> {
        return this.livreRepository.findOneBy({ id });
    }

    async create(createLivreDto: CreateLivreDto): Promise<Livre> {
        const livre = this.livreRepository.create(createLivreDto);
        return this.livreRepository.save(livre);
    }

}
