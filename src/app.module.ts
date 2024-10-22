import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivresModule } from './livres/livres.module';
import { UtilisateursModule } from './utilisateurs/utilisateurs.module';
import { EmpruntsModule } from './emprunts/emprunts.module';

@Module({
  imports: [LivresModule, UtilisateursModule, EmpruntsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}