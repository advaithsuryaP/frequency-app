import { WaveModel } from '../models/wave.model';

export interface IWaveRepository {
    create(waveModel: WaveModel): Promise<WaveModel>;
    findAll(limit: number, offset: number): Promise<WaveModel[]>;
    findOne(waveId: string): Promise<WaveModel | null>;
}

export const WAVE_REPOSITORY = Symbol('WAVE_REPOSITORY');
