import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Livre {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titre: string;

    @Column()
    auteur: string;

    @Column()
    pages: number;
}

