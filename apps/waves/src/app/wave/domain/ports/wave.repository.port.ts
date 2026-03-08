import { WaveModel } from '../models/wave.model';

export interface IWaveRepository {
    create(waveModel: WaveModel): Promise<WaveModel>;
    findAll(limit: number, offset: number): Promise<WaveModel[]>;
    findOne(waveId: string): Promise<WaveModel | null>;
    delete(waveId: string): Promise<boolean>;
}

export const WAVE_REPOSITORY = Symbol('WAVE_REPOSITORY');
