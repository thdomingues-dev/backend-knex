"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const User_1 = require("../../../entities/User");
class CreateUserUseCase {
    constructor(usersRepository, mailProvider) {
        this.usersRepository = usersRepository;
        this.mailProvider = mailProvider;
    }
    async execute(data) {
        const hasUser = await this.usersRepository.findByEmail(data.email);
        if (Object.keys(hasUser).length === 0) {
            const user = new User_1.User(data);
            await this.mailProvider.sendMail({
                to: {
                    name: data.email,
                    email: data.email
                },
                from: {
                    name: 'Teste',
                    email: 'equipe@gmail.com'
                },
                subject: 'Welcome!',
                body: `<span>Usuário ${user.name} criado com sucesso.</span>`
            });
            return await this.usersRepository.save(user);
        }
        throw new Error('User already exists.');
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
