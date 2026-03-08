import { Inject, Injectable } from '@nestjs/common';
import { WaveModel } from '../../domain/models/wave.model';
import { WAVE_REPOSITORY } from '../../domain/ports/wave.repository.port';
import type { IWaveRepository } from '../../domain/ports/wave.repository.port';
import { RpcException } from '@nestjs/microservices';
import { status } from '@grpc/grpc-js';
import { isUUID } from 'class-validator';

@Injectable()
export class WaveService {
    constructor(
        @Inject(WAVE_REPOSITORY)
        private readonly waveRepository: IWaveRepository
    ) {}

    async createWave(content: string): Promise<WaveModel> {
        const waveModel = WaveModel.create(content);
        return await this.waveRepository.create(waveModel);
    }

    async getWaves(limit: number, offset: number): Promise<WaveModel[]> {
        return await this.waveRepository.findAll(limit, offset);
    }

    async getWave(waveId: string): Promise<WaveModel> {
        if (!isUUID(waveId)) {
            throw new RpcException({
                code: status.INVALID_ARGUMENT,
                message: `Invalid wave ID format`
            });
        }
        const waveModel = await this.waveRepository.findOne(waveId);
        if (!waveModel) {
            throw new RpcException({ code: status.NOT_FOUND, message: `Wave ${waveId} not found` });
        }
        return waveModel;
    }

    async deleteWave(waveId: string): Promise<boolean> {
        if (!isUUID(waveId)) {
            throw new RpcException({ code: status.INVALID_ARGUMENT, message: `Invalid wave ID format` });
        }
        const result: number = await this.waveRepository.delete(waveId);
        return result > 0;
    }
}
