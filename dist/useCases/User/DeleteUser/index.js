"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserController = exports.deleteUserUseCase = void 0;
const PostgresUsersRepository_1 = require("../../../repositories/implementations/PostgresUsersRepository");
const MailtrapMailProvider_1 = require("../../../providers/implementations/MailtrapMailProvider");
const DeleteUserUseCase_1 = require("./DeleteUserUseCase");
const DeleUserController_1 = require("./DeleUserController");
const mailtrapProvider = new MailtrapMailProvider_1.MailtrapMailProvider();
const postgresUsersRepository = new PostgresUsersRepository_1.PostgresUsersRepository();
const deleteUserUseCase = new DeleteUserUseCase_1.DeleteUserUseCase(postgresUsersRepository, mailtrapProvider);
exports.deleteUserUseCase = deleteUserUseCase;
const deleteUserController = new DeleUserController_1.DeleteUserController(deleteUserUseCase);
exports.deleteUserController = deleteUserController;