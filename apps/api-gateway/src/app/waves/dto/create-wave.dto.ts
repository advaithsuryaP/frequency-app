import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateWaveDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(1000)
    content!: string;
}
