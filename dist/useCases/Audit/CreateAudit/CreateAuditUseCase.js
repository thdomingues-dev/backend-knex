"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAuditUseCase = void 0;
const Audit_1 = require("../../../entities/Audit");
class CreateAuditUseCase {
    constructor(auditsRepository) {
        this.auditsRepository = auditsRepository;
    }
    async execute(data) {
        const audit = new Audit_1.Audit(data);
        return await this.auditsRepository.save(audit);
    }
}
exports.CreateAuditUseCase = CreateAuditUseCase;
