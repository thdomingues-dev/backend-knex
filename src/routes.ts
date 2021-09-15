const express = require('express')

import { listAnalystController, createAnalystController } from './useCases/Analyst'
import { listCardController, createCardController, updateCardController } from './useCases/Card'
import { listAuditController } from './useCases/Audit'
import { listUserController, createUserController, updateUserController, deleteUserController } from './useCases/User'

const authMiddleware = require('./middlewares/auth')

const UserController = require('./controllers/UserController')
const AnalystsController = require('./controllers/AnalystsController')
const AuditsController = require('./controllers/AuditsController')
const CardsController = require('./controllers/CardsController')
const AuthController = require('./controllers/AuthController')

const routes = express.Router()

routes
	.post('/api/authenticate', AuthController.create)
	//Authentication

routes.use(authMiddleware)

//Users
routes
	.get('/api/users', (request, response, next) => listUserController.handle(request, response, next))
	.post('/api/users', (request, response, next) => createUserController.handle(request, response, next))
	.put('/api/users/:id', (request, response, next) => updateUserController.handle(request, response, next))
	.delete('/api/users/:id', (request, response, next) => deleteUserController.handle(request, response, next))
	/*.get('/api/users', UserController.index)
	.post('/api/users', UserController.create)
	.put('/api/users/:id', UserController.update)
	.delete('/api/users/:id', UserController.delete)*/

//Analysts
routes
	.get('/api/analysts', (request, response, next) => listAnalystController.handle(request, response, next))
	.post('/api/analysts', (request, response) => createAnalystController.handle(request, response))
	//.get('/api/analysts', AnalystsController.index)
	//.post('/api/analysts', AnalystsController.create)

//Audits
routes
	.get('/api/audits', (request, response, next) => listAuditController.handle(request, response, next))
	//.get('/api/audits', AuditsController.index)

//Cards
routes
	.get('/api/cards', (request, response, next) => listCardController.handle(request, response, next))
	.post('/api/cards', (request, response) => createCardController.handle(request, response))
	.put('/api/cards/:id', (request, response, next) => updateCardController.handle(request, response, next))
	//.get('/api/cards', CardsController.index)
	//.post('/api/cards', CardsController.create)
	//.put('/api/cards/:id', CardsController.update)

module.exports = routes
