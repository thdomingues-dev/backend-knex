"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCardController = void 0;
class ListCardController {
    constructor(listCardUseCase) {
        this.listCardUseCase = listCardUseCase;
    }
    async handle(_request, response, next) {
        try {
            const cards = await this.listCardUseCase.execute();
            return response.status(201).send(cards);
        }
        catch (error) {
            next(error);
            return response.status(400).json({ message: error === null || error === void 0 ? void 0 : error.message });
        }
    }
}
exports.ListCardController = ListCardController;
