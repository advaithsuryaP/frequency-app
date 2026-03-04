import { Controller } from '@nestjs/common';
import {
    GetWaveRequest,
    GetWaveResponse,
    CreateWaveRequest,
    CreateWaveResponse,
    WavesServiceController,
    WavesServiceControllerMethods,
    GetWavesRequest,
    GetWavesResponse
} from '@frequency-app/waves-contracts';
import { Observable } from 'rxjs';

@Controller()
@WavesServiceControllerMethods()
export class WaveController implements WavesServiceController {
    createWave(
        request: CreateWaveRequest
    ): Promise<CreateWaveResponse> | Observable<CreateWaveResponse> | CreateWaveResponse {
        return { waveId: '1', content: request.content, createdAt: new Date().toISOString() };
    }

    getWaves(request: GetWavesRequest): Promise<GetWavesResponse> | Observable<GetWavesResponse> | GetWavesResponse {
        return {
            waves: [
                { waveId: '1', content: 'Hello, world!', createdAt: new Date().toISOString() },
                { waveId: '2', content: 'Hello, world!', createdAt: new Date().toISOString() }
            ]
        };
    }

    getWave(request: GetWaveRequest): Promise<GetWaveResponse> | Observable<GetWaveResponse> | GetWaveResponse {
        return { waveId: '1', content: 'Hello, world!', createdAt: new Date().toISOString() };
    }
}
