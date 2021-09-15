"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
class CreateUserController {
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    async handle(request, response, next) {
        const { name, email, document, birthDate, enabledFeatures, metadatas, address, salaryBase, created_at, updated_at, deleted_at } = request.body;
        try {
            const user = await this.createUserUseCase.execute({ name, email, document, birthDate, enabledFeatures, metadatas, address, salaryBase, created_at, updated_at, deleted_at });
            return response.status(201).send(user);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.CreateUserController = CreateUserController;
