import { Controller } from '@nestjs/common';
import {
    CreateWaveRequest,
    CreateWaveResponse,
    GetWaveRequest,
    GetWaveResponse,
    WavesService
} from '@frequency-app/waves-contracts';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class WaveController implements WavesService {
    @GrpcMethod('WavesService', 'CreateWave')
    async CreateWave(request: CreateWaveRequest): Promise<CreateWaveResponse> {
        console.log(request);
        return { waveId: 1 };
    }

    @GrpcMethod('WavesService', 'GetWave')
    async GetWave(request: GetWaveRequest): Promise<GetWaveResponse> {
        console.log(request);
        return { content: 'Hello, world!', createdAt: Math.floor(Date.now() / 1000) };
    }
}
