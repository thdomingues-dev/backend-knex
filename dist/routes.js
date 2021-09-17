"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Analyst_1 = require("./useCases/Analyst");
const Card_1 = require("./useCases/Card");
const Audit_1 = require("./useCases/Audit");
const User_1 = require("./useCases/User");
const authMiddleware = require('./middlewares/auth');
const UserController = require('./controllers/UserController');
const AnalystsController = require('./controllers/AnalystsController');
const AuditsController = require('./controllers/AuditsController');
const CardsController = require('./controllers/CardsController');
const AuthController = require('./controllers/AuthController');
const routes = (0, express_1.Router)();
routes
    .post('/api/authenticate', AuthController.create);
//Authentication
routes.use(authMiddleware);
//Users
routes
    .get('/api/users', (request, response, next) => User_1.listUserController.handle(request, response, next))
    .post('/api/users', (request, response, next) => User_1.createUserController.handle(request, response, next))
    .put('/api/users/:id', (request, response, next) => User_1.updateUserController.handle(request, response, next))
    .delete('/api/users/:id', (request, response, next) => User_1.deleteUserController.handle(request, response, next));
/*.get('/api/users', UserController.index)
.post('/api/users', UserController.create)
.put('/api/users/:id', UserController.update)
.delete('/api/users/:id', UserController.delete)*/
//Analysts
routes
    .get('/api/analysts', (request, response, next) => Analyst_1.listAnalystController.handle(request, response, next))
    .post('/api/analysts', (request, response) => Analyst_1.createAnalystController.handle(request, response));
//.get('/api/analysts', AnalystsController.index)
//.post('/api/analysts', AnalystsController.create)
//Audits
routes
    .get('/api/audits', (request, response, next) => Audit_1.listAuditController.handle(request, response, next))
    .post('/api/audits', (request, response, next) => Audit_1.createAuditController.handle(request, response, next));
//.get('/api/audits', AuditsController.index)
//Cards
routes
    .get('/api/cards', (request, response, next) => Card_1.listCardController.handle(request, response, next))
    .post('/api/cards', (request, response) => Card_1.createCardController.handle(request, response))
    .put('/api/cards/:id', (request, response, next) => Card_1.updateCardController.handle(request, response, next));
//.get('/api/cards', CardsController.index)
//.post('/api/cards', CardsController.create)
//.put('/api/cards/:id', CardsController.update)
module.exports = routes;
