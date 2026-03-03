import { Controller, Get, Post, Body, Inject, OnModuleInit, Param } from '@nestjs/common';
import type { ClientGrpc } from '@nestjs/microservices';
import { CreateWaveRequest, GetWaveRequest, protobufPackage, WavesService } from '@frequency-app/waves-contracts';

@Controller('waves')
export class WavesController implements OnModuleInit {
    private wavesService!: WavesService;
    constructor(@Inject(protobufPackage) private readonly client: ClientGrpc) {}

    onModuleInit() {
        this.wavesService = this.client.getService<WavesService>('WavesService');
    }

    @Post()
    create(@Body() createWaveRequest: CreateWaveRequest) {
        return this.wavesService.CreateWave(createWaveRequest);
    }

    // @Get()
    // findAll() {
    //     return this.wavesService.findAll();
    // }

    @Get(':id')
    findOne(@Param('id') id: string) {
        const getWaveRequest: GetWaveRequest = { waveId: Number(id) };
        return this.wavesService.GetWave(getWaveRequest);
    }

    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updateWaveDto: UpdateWaveDto) {
    //     return this.wavesService.update(+id, updateWaveDto);
    // }

    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //     return this.wavesService.remove(+id);
    // }
}
