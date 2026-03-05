import { WaveModel } from '../../../domain/models/wave.model';
import { WaveEntity } from '../entities/wave.entity';

export class WaveMapper {
    static toDomain(entity: WaveEntity): WaveModel {
        return new WaveModel(entity.id, entity.content, entity.createdAt, entity.updatedAt);
    }

    static toEntity(model: WaveModel): WaveEntity {
        const entity = new WaveEntity();
        entity.id = model.id;
        entity.content = model.content;
        entity.createdAt = model.createdAt;
        entity.updatedAt = model.updatedAt;
        return entity;
    }
}
