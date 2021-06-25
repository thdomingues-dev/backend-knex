const express = require('express')

const UserController = require('./controllers/UserController')
const AnalystsController = require('./controllers/AnalystsController')
const AuditsController = require('./controllers/AuditsController')
const CardsController = require('./controllers/CardsController')
const AuthController = require('./controllers/AuthController')

const routes = express.Router()

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

routes
	.post('/api/authenticate', AuthController.create)
	//Authentication

module.exports = routes
