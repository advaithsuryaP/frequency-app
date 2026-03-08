import { Inject, Injectable, InternalServerErrorException, NotFoundException, OnModuleInit } from '@nestjs/common';
import type { ClientGrpc } from '@nestjs/microservices';
import {
    Wave,
    CreateWaveRequest,
    GetWaveRequest,
    GetWavesRequest,
    GetWavesResponse,
    WAVES_PACKAGE_NAME,
    WAVES_SERVICE_NAME,
    WavesServiceClient,
    DeleteWaveRequest,
    DeleteWaveResponse
} from '@frequency-app/waves-contracts';
import { CreateWaveDto } from './dto/create-wave.dto';
import { firstValueFrom } from 'rxjs';
import { status } from '@grpc/grpc-js';

@Injectable()
export class WavesService implements OnModuleInit {
    private wavesServiceClient!: WavesServiceClient;
    constructor(@Inject(WAVES_PACKAGE_NAME) private readonly client: ClientGrpc) {}

    onModuleInit() {
        this.wavesServiceClient = this.client.getService<WavesServiceClient>(WAVES_SERVICE_NAME);
    }

    async create(createWaveDto: CreateWaveDto): Promise<Wave> {
        try {
            const createWaveRequest: CreateWaveRequest = { content: createWaveDto.content };
            return firstValueFrom(this.wavesServiceClient.createWave(createWaveRequest));
        } catch (error: any) {
            if (error?.code === status.NOT_FOUND) {
                throw new NotFoundException(error.message);
            }
            throw new InternalServerErrorException();
        }
    }

    async findAll(): Promise<GetWavesResponse> {
        const getWavesRequest: GetWavesRequest = { limit: 10, offset: 0 };
        return firstValueFrom(this.wavesServiceClient.getWaves(getWavesRequest));
    }

    async findOne(waveId: string): Promise<Wave> {
        try {
            const getWaveRequest: GetWaveRequest = { waveId };
            console.log('Get Wave Request: ', getWaveRequest);
            const result = firstValueFrom(this.wavesServiceClient.getWave(getWaveRequest)).catch(error => {
                console.log('Raw gRPC error:', JSON.stringify(error, null, 2));
                console.log('Error keys:', Object.keys(error));
                console.log('error.code:', error.code);
                console.log('error.details:', error.details);
                console.log('error.message:', error.message);
                if (error?.code === status.NOT_FOUND) {
                    throw new NotFoundException(error.message);
                }
                throw new NotFoundException(error.message);
            });
            console.log('Result: ', result);
            return result;
        } catch (error: any) {
            console.log('Error: ', error);
            if (error?.code === status.NOT_FOUND) {
                throw new NotFoundException(error.message);
            }
            throw new NotFoundException(error.message);
        }
    }

    // async update(id: string, updatePostDto: UpdatePostDto): Promise<PostEntity> {}

    async remove(id: string): Promise<DeleteWaveResponse> {
        const deleteWaveRequest: DeleteWaveRequest = { waveId: id };
        return firstValueFrom(this.wavesServiceClient.deleteWave(deleteWaveRequest));
    }
}
