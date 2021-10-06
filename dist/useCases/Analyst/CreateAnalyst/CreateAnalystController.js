"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAnalystController = void 0;
class CreateAnalystController {
    constructor(createAnalystUseCase) {
        this.createAnalystUseCase = createAnalystUseCase;
    }
    async handle(request, response, next) {
        const { user_id, email, password, roles, created_at, updated_at } = request.body;
        try {
            await this.createAnalystUseCase.execute({ user_id, email, password, roles, created_at, updated_at });
            return response.status(201).send();
        }
        catch (error) {
            console.error(error);
            next(error);
            return response.status(400).json({ message: error === null || error === void 0 ? void 0 : error.message });
        }
    }
}
exports.CreateAnalystController = CreateAnalystController;
