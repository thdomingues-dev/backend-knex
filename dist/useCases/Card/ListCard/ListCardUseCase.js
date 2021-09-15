"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCardUseCase = void 0;
class ListCardUseCase {
    constructor(cardRepository) {
        this.cardRepository = cardRepository;
    }
    async execute() {
        return await this.cardRepository.findAllCards();
    }
}
exports.ListCardUseCase = ListCardUseCase;
