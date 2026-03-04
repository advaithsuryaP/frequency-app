import { Controller } from '@nestjs/common';
import {
    GetWaveRequest,
    GetWaveResponse,
    CreateWaveRequest,
    CreateWaveResponse,
    WavesServiceController,
    WavesServiceControllerMethods
} from '@frequency-app/waves-contracts';
import { Observable } from 'rxjs';

@Controller()
@WavesServiceControllerMethods()
export class WaveController implements WavesServiceController {
    getWave(request: GetWaveRequest): Promise<GetWaveResponse> | Observable<GetWaveResponse> | GetWaveResponse {
        return { content: 'Hello, world!', createdAt: new Date().toISOString() };
    }

    createWave(
        request: CreateWaveRequest
    ): Promise<CreateWaveResponse> | Observable<CreateWaveResponse> | CreateWaveResponse {
        return { waveId: '1' };
    }
}
