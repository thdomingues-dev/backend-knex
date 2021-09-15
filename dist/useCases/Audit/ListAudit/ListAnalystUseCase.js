"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAuditsUseCase = void 0;
class ListAuditsUseCase {
    constructor(auditRepository) {
        this.auditRepository = auditRepository;
    }
    async execute() {
        return await this.auditRepository.findAllAudits();
    }
}
exports.ListAuditsUseCase = ListAuditsUseCase;
