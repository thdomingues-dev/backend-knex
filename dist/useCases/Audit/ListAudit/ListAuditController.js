"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAuditController = void 0;
class ListAuditController {
    constructor(listAuditUseCase) {
        this.listAuditUseCase = listAuditUseCase;
    }
    async handle(_request, response, next) {
        try {
            const audits = await this.listAuditUseCase.execute();
            return response.status(201).send(audits);
        }
        catch (error) {
            next(error);
            return response.status(400).json({ message: error === null || error === void 0 ? void 0 : error.message });
        }
    }
}
exports.ListAuditController = ListAuditController;
