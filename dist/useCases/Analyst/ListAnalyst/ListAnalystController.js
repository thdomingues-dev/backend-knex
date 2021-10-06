"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAnalystController = void 0;
class ListAnalystController {
    constructor(listAnalystUseCase) {
        this.listAnalystUseCase = listAnalystUseCase;
    }
    async handle(_request, response, next) {
        try {
            const analysts = await this.listAnalystUseCase.execute();
            return response.status(200).send(analysts);
        }
        catch (error) {
            next(error);
            return response.status(400).json({ message: error === null || error === void 0 ? void 0 : error.message });
        }
    }
}
exports.ListAnalystController = ListAnalystController;
