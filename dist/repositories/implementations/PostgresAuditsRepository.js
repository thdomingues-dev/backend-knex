"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresAuditsRepository = void 0;
const database_1 = __importDefault(require("../../database"));
class PostgresAuditsRepository {
    async findAllAudits() {
        return await (0, database_1.default)('audits');
    }
    async save(audit) {
        return await (0, database_1.default)('audits').returning('*').insert(audit);
    }
}
exports.PostgresAuditsRepository = PostgresAuditsRepository;
