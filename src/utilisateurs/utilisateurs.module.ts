import { Module } from '@nestjs/common';
import { UtilisateursService } from './utilisateurs.service';
import { UtilisateursController } from './utilisateurs.controller';

@Module({
  providers: [UtilisateursService],
  controllers: [UtilisateursController]
})
export class UtilisateursModule {}
