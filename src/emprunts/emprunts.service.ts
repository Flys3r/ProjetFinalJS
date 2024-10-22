import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class EmpruntsService {
    private emprunts = []; // Simule une base de données pour les emprunts
    private livres = []; // Simule une base de données pour les livres
    private utilisateurs = []; // Simule une base de données pour les utilisateurs

    // Méthode pour emprunter un livre
    emprunter(livreId: number, userId: number) {
        const livre = this.livres.find((livre) => livre.id === livreId);
        const utilisateur = this.utilisateurs.find((user) => user.id === userId);

        if (!livre) {
            throw new NotFoundException(`Livre avec ID ${livreId} non trouvé`);
        }
        if (!utilisateur) {
            throw new NotFoundException(`Utilisateur avec ID ${userId} non trouvé`);
        }

        const estEmprunte = this.emprunts.some((emprunt) => emprunt.livreId === livreId && !emprunt.dateRetour);
        if (estEmprunte) {
            return { message: 'Ce livre est déjà emprunté' };
        }

        const emprunt = {
            livreId,
            userId,
            dateEmprunt: new Date(),
            dateRetour: null,
        };
        this.emprunts.push(emprunt);
        return { message: 'Livre emprunté avec succès', emprunt };
    }

}
