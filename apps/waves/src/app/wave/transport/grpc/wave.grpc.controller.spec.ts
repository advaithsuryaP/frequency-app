import { Test, TestingModule } from '@nestjs/testing';
import { WaveGrpcController } from './wave.grpc.controller';

describe('WaveGrpcController', () => {
    let controller: WaveGrpcController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [WaveGrpcController]
        }).compile();

        controller = module.get<WaveGrpcController>(WaveGrpcController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
