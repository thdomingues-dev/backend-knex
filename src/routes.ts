import { Router } from 'express'

const authMiddleware = require('./middlewares/auth')

const UserController = require('./controllers/UserController')
const AnalystsController = require('./controllers/AnalystsController')
const AuditsController = require('./controllers/AuditsController')
const CardsController = require('./controllers/CardsController')
const AuthController = require('./controllers/AuthController')

const routes = Router()

routes
	.post('/api/authenticate', AuthController.create)
	//Authentication

routes.use(authMiddleware)

routes
	.get('/api/users', UserController.index)
	.post('/api/users', UserController.create)
	.put('/api/users/:id', UserController.update)
	.delete('/api/users/:id', UserController.delete)
	//Users

routes
	.get('/api/analysts', AnalystsController.index)
	.post('/api/analysts', AnalystsController.create)
	//Analysts

routes
	.get('/api/audits', AuditsController.index)
	//Audits

routes
	.get('/api/cards', CardsController.index)
	.post('/api/cards', CardsController.create)
	.put('/api/cards/:id', CardsController.update)
	//Cards

module.exports = routes