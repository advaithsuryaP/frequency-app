import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WaveEntity } from '../entities/wave.entity';
import { IWaveRepository } from '../../../domain/ports/wave.repository.port';
import { WaveModel } from '../../../domain/models/wave.model';
import { WaveMapper } from '../mappers/wave.mapper';

@Injectable()
export class WaveTypeormRepository implements IWaveRepository {
    constructor(@InjectRepository(WaveEntity) private typeorm: Repository<WaveEntity>) {}

    async create(waveModel: WaveModel): Promise<WaveModel> {
        const entity = WaveMapper.toEntity(waveModel);
        const savedEntity = await this.typeorm.save(entity);
        return WaveMapper.toDomain(savedEntity);
    }

    async findAll(limit: number, offset: number): Promise<WaveModel[]> {
        const entities = await this.typeorm.find({
            skip: offset,
            take: limit
        });
        return entities.map(WaveMapper.toDomain);
    }

    async findOne(waveId: string): Promise<WaveModel | null> {
        const entity = await this.typeorm.findOne({ where: { id: waveId } });
        return entity ? WaveMapper.toDomain(entity) : null;
    }
}
