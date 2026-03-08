import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { WavesService } from './waves.service';
import { CreateWaveDto } from './dto/create-wave.dto';

@Controller('waves')
export class WavesController {
    constructor(private readonly wavesService: WavesService) {}

    @Post()
    create(@Body() createWaveDto: CreateWaveDto) {
        return this.wavesService.create(createWaveDto);
    }

    @Get()
    findAll() {
        return this.wavesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.wavesService.findOne(id);
    }

    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updateWaveDto: UpdateWaveDto) {
    //     return this.wavesService.update(+id, updateWaveDto);
    // }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.wavesService.remove(id);
    }
}
