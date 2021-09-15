"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserController = void 0;
class ListUserController {
    constructor(listUserUseCase) {
        this.listUserUseCase = listUserUseCase;
    }
    async handle(_request, response, next) {
        try {
            const users = await this.listUserUseCase.execute();
            return response.status(201).send(users);
        }
        catch (error) {
            next(error);
            return response.status(400).json({ message: error === null || error === void 0 ? void 0 : error.message });
        }
    }
}
exports.ListUserController = ListUserController;
