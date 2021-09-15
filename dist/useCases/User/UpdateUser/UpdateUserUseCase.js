"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserUseCase = void 0;
const User_1 = require("../../../entities/User");
class UpdateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(data) {
        const hasUser = await this.userRepository.findById(data === null || data === void 0 ? void 0 : data.id);
        if (Object.keys(hasUser).length === 0) {
            throw new Error('User does not exists.');
        }
        const user = new User_1.User(data);
        return await this.userRepository.update(user);
    }
}
exports.UpdateUserUseCase = UpdateUserUseCase;
