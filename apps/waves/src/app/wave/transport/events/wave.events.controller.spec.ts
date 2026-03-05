import { Test, TestingModule } from '@nestjs/testing';
import { WaveEventsController } from './wave.events.controller';

describe('WaveEventsController', () => {
    let controller: WaveEventsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [WaveEventsController]
        }).compile();

        controller = module.get<WaveEventsController>(WaveEventsController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
