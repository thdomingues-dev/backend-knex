"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserUseCase = void 0;
const User_1 = require("../../../entities/User");
class DeleteUserUseCase {
    constructor(usersRepository, mailProvider) {
        this.usersRepository = usersRepository;
        this.mailProvider = mailProvider;
    }
    async execute(data) {
        const hasUser = await this.usersRepository.findById(data === null || data === void 0 ? void 0 : data.id);
        if (Object.keys(hasUser).length === 0) {
            throw new Error('User does not exists.');
        }
        const user = new User_1.User(data);
        return await this.usersRepository.delete(user);
    }
}
exports.DeleteUserUseCase = DeleteUserUseCase;
