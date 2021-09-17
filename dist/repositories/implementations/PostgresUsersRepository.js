"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresUsersRepository = void 0;
const database_1 = __importDefault(require("../../database"));
class PostgresUsersRepository {
    constructor() {
        this.users = [];
    }
    async findAllUsers({ page = 1 }) {
        return await (0, database_1.default)('users').limit(10).offset((page - 1) * 10);
    }
    async findByEmail(email) {
        return await (0, database_1.default)('users').where({ 'users.email': email });
    }
    async findById(id) {
        return await (0, database_1.default)('users').where({ 'users.id': id });
    }
    async save(user) {
        return await (0, database_1.default)('users').returning('*').insert({
            name: user.name,
            email: user.email,
            document: user.document,
            birthDate: user.birthDate,
            enabledFeatures: user.enabledFeatures,
            metadatas: user.metadatas,
            address: user.address,
            salaryBase: user.salaryBase
        });
    }
    async totalCount() {
        const [response] = await (0, database_1.default)('users').count();
        return response === null || response === void 0 ? void 0 : response.count;
    }
    async delete(user) {
        return await (0, database_1.default)('users').where({ id: user.id }).del();
    }
    async update(payload) {
        return await (0, database_1.default)('users').update({ name: payload === null || payload === void 0 ? void 0 : payload.name }).where({ id: payload === null || payload === void 0 ? void 0 : payload.id });
    }
}
exports.PostgresUsersRepository = PostgresUsersRepository;
