"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCardController = void 0;
class CreateCardController {
    constructor(createCardUseCase) {
        this.createCardUseCase = createCardUseCase;
    }
    async handle(request, response) {
        const { user_id, metadatas, status, created_at, updated_at } = request.body;
        try {
            const card = await this.createCardUseCase.execute({ user_id, metadatas, status, created_at, updated_at });
            return response.status(201).send(card);
        }
        catch (error) {
            console.error(error);
            return response.status(400).json({ message: error === null || error === void 0 ? void 0 : error.message });
        }
    }
}
exports.CreateCardController = CreateCardController;
