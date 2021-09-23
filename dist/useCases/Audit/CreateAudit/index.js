"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuditController = exports.createAuditUseCase = void 0;
const PostgresAuditsRepository_1 = require("../../../repositories/implementations/PostgresAuditsRepository");
const CreateAuditUseCase_1 = require("./CreateAuditUseCase");
const CreateAuditController_1 = require("./CreateAuditController");
const postgresAuditsRepository = new PostgresAuditsRepository_1.PostgresAuditsRepository();
const createAuditUseCase = new CreateAuditUseCase_1.CreateAuditUseCase(postgresAuditsRepository);
exports.createAuditUseCase = createAuditUseCase;
const createAuditController = new CreateAuditController_1.CreateAuditController(createAuditUseCase);
exports.createAuditController = createAuditController;