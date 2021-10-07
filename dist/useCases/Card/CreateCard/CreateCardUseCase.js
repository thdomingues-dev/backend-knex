"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCardUseCase = void 0;
const Card_1 = require("../../../entities/Card");
class CreateCardUseCase {
    constructor(cardsRepository) {
        this.cardsRepository = cardsRepository;
    }
    async execute(data) {
        const { user_id, name, limit, created_at, updated_at } = data;
        const card = new Card_1.Card({ status: 'requested', user_id, name, limit, updated_at, created_at });
        return await this.cardsRepository.save(card);
    }
}
exports.CreateCardUseCase = CreateCardUseCase;
