"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAnalystUseCase = void 0;
const Analyst_1 = require("../../../entities/Analyst");
//SRP - single responsibility principle
class CreateAnalystUseCase {
    constructor(analystsRepository, //LSP - liskov substitution principle
    mailProvider) {
        this.analystsRepository = analystsRepository;
        this.mailProvider = mailProvider;
    }
    async execute(data) {
        const hasAnalyst = await this.analystsRepository.findByEmail(data.email);
        if (hasAnalyst === null || hasAnalyst === void 0 ? void 0 : hasAnalyst.id) {
            throw new Error('Analyst already exists.');
        }
        const analyst = new Analyst_1.Analyst(data);
        await this.analystsRepository.save(analyst); // DIP - dependency inversion principle
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
            body: '<span>Você já pode fazer login no nosso sistema</span>'
        });
    }
}
exports.CreateAnalystUseCase = CreateAnalystUseCase;
