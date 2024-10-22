import { IsString, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateLivreDto {
    @IsString()
    readonly titre: string;

    @IsString()
    readonly auteur: string;

    @IsString()
    readonly genre: string;

    @Type(() => Number)
    @IsInt()
    @Min(1)
    @Max(5)
    readonly rating: number;
}
