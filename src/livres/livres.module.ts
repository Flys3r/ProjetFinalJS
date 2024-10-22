import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LivresService } from './livres.service';
import { LivresController } from './livres.controller';
import { Livre } from './livres.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Livre])],
  providers: [LivresService],
  controllers: [LivresController],
})
export class LivresModule { }
