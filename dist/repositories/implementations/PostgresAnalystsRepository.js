"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresAnalystsRepository = void 0;
const database_1 = __importDefault(require("../../database"));
const bcrypt = require('bcryptjs');
class PostgresAnalystsRepository {
    constructor() {
        this.analysts = [];
    }
    async findByEmail(email) {
        return await (0, database_1.default)('analysts').where({ 'analysts.email': email });
    }
    async findAllAnalysts() {
        return await (0, database_1.default)('analysts');
    }
    async save(analyst) {
        const hashPassword = await bcrypt.hash(analyst.password, 10);
        return await (0, database_1.default)('analysts').insert({
            user_id: analyst.user_id,
            email: analyst.email,
            password: hashPassword,
            roles: analyst.roles
        });
    }
}
exports.PostgresAnalystsRepository = PostgresAnalystsRepository;
