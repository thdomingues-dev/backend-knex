"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCardController = void 0;
class UpdateCardController {
    constructor(updateCardUseCase) {
        this.updateCardUseCase = updateCardUseCase;
    }
    async handle(request, response, next) {
        const { id } = request.params;
        const { name, status } = request.body;
        try {
            name ? await this.updateCardUseCase.execute({ id, name }) : null;
            status ? await this.updateCardUseCase.execute({ id, status }) : null;
            if (name || status)
                return response.status(200).send({ message: 'card has been updated.' });
            return response.status(400).json({ message: "bad request, try again" });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.UpdateCardController = UpdateCardController;
