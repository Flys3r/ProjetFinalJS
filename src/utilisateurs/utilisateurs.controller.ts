import { Controller, Post, Body } from '@nestjs/common';
import { UtilisateursService } from './utilisateurs.service';

@Controller('utilisateurs')
export class UtilisateursController {
    constructor(private readonly utilisateursService: UtilisateursService) { }

    @Post('register')
    register(@Body() body) {
        return this.utilisateursService.register(body.nom, body.motDePasse);
    }

    @Post('login')
    login(@Body() body) {
        return this.utilisateursService.login(body.nom, body.motDePasse);
    }
}