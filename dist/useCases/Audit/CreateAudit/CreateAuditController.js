"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAuditController = void 0;
class CreateAuditController {
    constructor(createAuditUseCase) {
        this.createAuditUseCase = createAuditUseCase;
    }
    async handle(request, response, next) {
        const { analyst_id, type, before, after, created_at } = request.body;
        try {
            const audit = await this.createAuditUseCase.execute({ analyst_id, type, before, after, created_at });
            return response.status(201).send(audit);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.CreateAuditController = CreateAuditController;
