"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserUseCase = void 0;
class ListUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(data) {
        const totalCount = await this.userRepository.totalCount();
        const users = await this.userRepository.findAllUsers(data);
        return { users, totalCount };
    }
}
exports.ListUserUseCase = ListUserUseCase;
