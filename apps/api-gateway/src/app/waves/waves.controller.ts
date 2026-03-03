import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateWaveDto } from './dto/create-wave.dto';
import { UpdateWaveDto } from './dto/update-wave.dto';

@Controller('waves')
export class WavesController {
    @Post()
    create(@Body() createWaveDto: CreateWaveDto) {
        // return this.wavesService.create(createWaveDto);
    }

    @Get()
    findAll() {
        // return this.wavesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        // return this.wavesService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateWaveDto: UpdateWaveDto) {
        // return this.wavesService.update(+id, updateWaveDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        // return this.wavesService.remove(+id);
    }
}
