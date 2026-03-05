export class WaveModel {
    constructor(
        public readonly id: string,
        public readonly content: string,
        public readonly createdAt: Date,
        public readonly updatedAt: Date
    ) {}

    static create(content: string): WaveModel {
        if (content.trim().length === 0) throw new Error('Content cannot be empty');
        if (content.trim().length > 1000) throw new Error('Content cannot be longer than 1000 characters');

        return new WaveModel(crypto.randomUUID(), content, new Date(), new Date());
    }
}
