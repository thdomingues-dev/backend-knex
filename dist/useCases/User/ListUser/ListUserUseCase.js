"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserUseCase = void 0;
class ListUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute() {
        return await this.userRepository.findAllUsers();
    }
}
exports.ListUserUseCase = ListUserUseCase;
