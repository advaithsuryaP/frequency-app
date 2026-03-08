import { Controller } from '@nestjs/common';
import {
    Wave,
    GetWaveRequest,
    GetWavesRequest,
    GetWavesResponse,
    CreateWaveRequest,
    WavesServiceController,
    WavesServiceControllerMethods,
    DeleteWaveRequest,
    DeleteWaveResponse
} from '@frequency-app/waves-contracts';
import { WaveService } from '../../application/services/wave.service';

@Controller('wave-grpc')
@WavesServiceControllerMethods()
export class WaveGrpcController implements WavesServiceController {
    constructor(private readonly waveService: WaveService) {}

    async createWave(request: CreateWaveRequest): Promise<Wave> {
        const content = request.content;
        const wave = await this.waveService.createWave(content);
        return {
            waveId: wave.id,
            content: wave.content,
            createdAt: wave.createdAt.toISOString(),
            updatedAt: wave.updatedAt.toISOString()
        };
    }

    async getWaves(request: GetWavesRequest): Promise<GetWavesResponse> {
        const waves = await this.waveService.getWaves(request.limit, request.offset);
        return {
            waves: waves.map(wave => ({
                waveId: wave.id,
                content: wave.content,
                createdAt: wave.createdAt.toISOString(),
                updatedAt: wave.updatedAt.toISOString()
            }))
        };
    }

    async getWave(request: GetWaveRequest): Promise<Wave> {
        const wave = await this.waveService.getWave(request.waveId);
        return {
            waveId: wave.id,
            content: wave.content,
            createdAt: wave.createdAt.toISOString(),
            updatedAt: wave.updatedAt.toISOString()
        };
    }

    async deleteWave(request: DeleteWaveRequest): Promise<DeleteWaveResponse> {
        const success = await this.waveService.deleteWave(request.waveId);
        return { success };
    }
}
