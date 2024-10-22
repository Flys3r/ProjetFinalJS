import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LivresModule } from './livres/livres.module';
import { Livre } from './livres/livres.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Livre],
      synchronize: true,
    }),
    LivresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

