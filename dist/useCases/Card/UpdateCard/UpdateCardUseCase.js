"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCardUseCase = void 0;
class UpdateCardUseCase {
    constructor(cardRepository) {
        this.cardRepository = cardRepository;
    }
    async execute(data) {
        const hasCard = await this.cardRepository.findById(data === null || data === void 0 ? void 0 : data.id);
        if (Object.keys(hasCard).length === 0) {
            throw new Error('Card does not exists.');
        }
        return await this.cardRepository.update(data);
    }
}
exports.UpdateCardUseCase = UpdateCardUseCase;
