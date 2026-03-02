import { PartialType } from '@nestjs/mapped-types';
import { CreateWaveDto } from './create-wave.dto';

export class UpdateWaveDto extends PartialType(CreateWaveDto) {}
