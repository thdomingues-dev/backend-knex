"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserController = void 0;
class ListUserController {
    constructor(listUserUseCase) {
        this.listUserUseCase = listUserUseCase;
    }
    async handle(request, response, next) {
        const { page = 1 } = request.query;
        try {
            const handleListUserUseCase = await this.listUserUseCase.execute({ page });
            response.header('X-Total-Count', handleListUserUseCase.totalCount.toString());
            return response.status(201).send(handleListUserUseCase.users);
        }
        catch (error) {
            next(error);
            return response.status(400).json({ message: error === null || error === void 0 ? void 0 : error.message });
        }
    }
}
exports.ListUserController = ListUserController;
