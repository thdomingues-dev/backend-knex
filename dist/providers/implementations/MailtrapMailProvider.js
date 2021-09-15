"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailtrapMailProvider = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
class MailtrapMailProvider {
    constructor() {
        this.transporter = nodemailer_1.default.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "cbd7a4ccc4dd7d",
                pass: "8d6c4dc8b9430d"
            }
        });
    }
    async sendMail(message) {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        });
    }
}
exports.MailtrapMailProvider = MailtrapMailProvider;
