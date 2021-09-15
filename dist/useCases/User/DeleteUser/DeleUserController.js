"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserController = void 0;
class DeleteUserController {
    constructor(deleteUserUseCase) {
        this.deleteUserUseCase = deleteUserUseCase;
    }
    async handle(request, response, next) {
        const { id } = request.params;
        try {
            const user = await this.deleteUserUseCase.execute({ id });
            return response.status(200).send({ message: 'Usuário excluído com sucesso' });
        }
        catch (error) {
            next(error);
            return response.status(400).json({ message: error });
        }
    }
}
exports.DeleteUserController = DeleteUserController;
