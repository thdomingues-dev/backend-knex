"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCardUseCase = void 0;
const Card_1 = require("../../../entities/Card");
class CreateCardUseCase {
    constructor(cardsRepository) {
        this.cardsRepository = cardsRepository;
    }
    async execute(data) {
        const card = new Card_1.Card(data);
        return await this.cardsRepository.save(card);
    }
}
exports.CreateCardUseCase = CreateCardUseCase;
