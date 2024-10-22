import { Livre } from '../livres/livres.entity';
import { Utilisateur } from '../utilisateurs/utilisateurs.entity';

export class Emprunt {
    id: number;
    livre: Livre;
    utilisateur: Utilisateur;
    dateEmprunt: Date;
    dateRetour: Date;
}