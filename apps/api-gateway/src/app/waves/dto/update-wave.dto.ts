import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateWaveDto } from './create-wave.dto';

export class UpdateWaveDto extends PartialType(CreateWaveDto) {
    @IsNumber()
    @IsNotEmpty()
    waveId!: number;
}
