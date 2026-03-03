import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import type { ClientGrpc } from '@nestjs/microservices';
import { CreateWaveDto } from './dto/create-wave.dto';
import {
    CreateWaveRequest,
    CreateWaveResponse,
    GetWaveRequest,
    GetWaveResponse,
    protobufPackage,
    WavesService as WavesServiceClient
} from '@frequency-app/waves-contracts';

@Injectable()
export class WavesService implements OnModuleInit {
    private wavesServiceClient!: WavesServiceClient;
    constructor(@Inject(protobufPackage) private readonly client: ClientGrpc) {}

    onModuleInit() {
        this.wavesServiceClient = this.client.getService<WavesServiceClient>('WavesService');
    }

    async create(CreateWaveDto: CreateWaveDto): Promise<CreateWaveResponse> {
        const createWaveRequest: CreateWaveRequest = { content: CreateWaveDto.content };
        return this.wavesServiceClient.CreateWave(createWaveRequest);
    }

    async findOne(id: string): Promise<GetWaveResponse> {
        const getWaveRequest: GetWaveRequest = { waveId: Number(id) };
        return this.wavesServiceClient.GetWave(getWaveRequest);
    }

    // async update(id: string, updatePostDto: UpdatePostDto): Promise<PostEntity> {}

    // async remove(id: string): Promise<void> {}
}
