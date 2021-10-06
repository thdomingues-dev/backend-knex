"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresCardsRepository = void 0;
const database_1 = __importDefault(require("../../database"));
class PostgresCardsRepository {
    async findAllCards() {
        return await (0, database_1.default)('cards');
    }
    async findById(id) {
        return await (0, database_1.default)('cards').where({ 'cards.id': id });
    }
    async update(payload) {
        if (payload === null || payload === void 0 ? void 0 : payload.metadatas) {
            return await (0, database_1.default)('cards').update({ metadatas: payload === null || payload === void 0 ? void 0 : payload.metadatas }).where({ id: payload === null || payload === void 0 ? void 0 : payload.id });
        }
        if (payload === null || payload === void 0 ? void 0 : payload.status) {
            return await (0, database_1.default)('cards').update({ status: payload === null || payload === void 0 ? void 0 : payload.status }).where({ id: payload === null || payload === void 0 ? void 0 : payload.id });
        }
    }
    async save(card) {
        return await (0, database_1.default)('cards').returning('*').insert(card);
    }
    async exists(id) {
        const result = await this.findById(id);
        if (result.length !== 0 && result[0].id === id)
            return true;
        return false;
    }
}
exports.PostgresCardsRepository = PostgresCardsRepository;
