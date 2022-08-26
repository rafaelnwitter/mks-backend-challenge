import { IsNotEmpty, IsString, IsOptional, MaxLength } from 'class-validator';

export class CreateMovieDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @MaxLength(500)
    description?: string;
}
