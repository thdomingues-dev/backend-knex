"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserController = void 0;
class UpdateUserController {
    constructor(updateUserUsecase) {
        this.updateUserUsecase = updateUserUsecase;
    }
    async handle(request, response, next) {
        const { id } = request.params;
        const { name } = request.body;
        try {
            await this.updateUserUsecase.execute({ id, name });
            return response.status(200).send({ message: 'User has been updated.' });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.UpdateUserController = UpdateUserController;
