"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAnalystUseCase = void 0;
class ListAnalystUseCase {
    constructor(analystRepository) {
        this.analystRepository = analystRepository;
    }
    async execute() {
        return await this.analystRepository.findAllAnalysts();
    }
}
exports.ListAnalystUseCase = ListAnalystUseCase;
