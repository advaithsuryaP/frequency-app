import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import type { ClientGrpc } from '@nestjs/microservices';
import {
    CreateWaveRequest,
    CreateWaveResponse,
    GetWaveRequest,
    GetWaveResponse,
    GetWavesRequest,
    GetWavesResponse,
    WAVES_PACKAGE_NAME,
    WAVES_SERVICE_NAME,
    WavesServiceClient
} from '@frequency-app/waves-contracts';
import { CreateWaveDto } from './dto/create-wave.dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WavesService implements OnModuleInit {
    private wavesServiceClient!: WavesServiceClient;
    constructor(@Inject(WAVES_PACKAGE_NAME) private readonly client: ClientGrpc) {}

    onModuleInit() {
        this.wavesServiceClient = this.client.getService<WavesServiceClient>(WAVES_SERVICE_NAME);
    }

    async create(createWaveDto: CreateWaveDto): Promise<CreateWaveResponse> {
        const createWaveRequest: CreateWaveRequest = { content: createWaveDto.content };
        return firstValueFrom(this.wavesServiceClient.createWave(createWaveRequest));
    }

    async findAll(): Promise<GetWavesResponse> {
        const getWavesRequest: GetWavesRequest = { limit: 10, offset: 0 };
        return firstValueFrom(this.wavesServiceClient.getWaves(getWavesRequest));
    }

    async findOne(waveId: string): Promise<GetWaveResponse> {
        const getWaveRequest: GetWaveRequest = { waveId };
        return firstValueFrom(this.wavesServiceClient.getWave(getWaveRequest));
    }

    // async update(id: string, updatePostDto: UpdatePostDto): Promise<PostEntity> {}

    // async remove(id: string): Promise<void> {}
}
