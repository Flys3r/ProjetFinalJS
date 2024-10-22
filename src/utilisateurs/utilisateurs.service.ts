import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilisateursService {

    private utilisateurs = [];

    register(nom: string, motDePasse: string) {
        const utilisateur = { nom, motDePasse };
        this.utilisateurs.push(utilisateur);
        return { message: 'Utilisateur enregistré avec succès', utilisateur };
    }


    login(nom: string, motDePasse: string) {
        const utilisateur = this.utilisateurs.find(
            (user) => user.nom === nom && user.motDePasse === motDePasse,
        );

        if (!utilisateur) {
            return { message: 'Nom ou mot de passe incorrect' };
        }

        return { message: 'Connexion réussie', utilisateur };
    }
}

