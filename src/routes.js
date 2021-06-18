const express = require('express')
const UserController = require('./controllers/UserController')
const AnalystsController = require('./controllers/AnalystsController')
const AuditsController = require('./controllers/AuditsController')
const CardsController = require('./controllers/CardsController')

const routes = express.Router()

routes
	.get('/users', UserController.index)
	.post('/users', UserController.create)
	.put('/users/:id', UserController.update)
	.delete('/users/:id', UserController.delete)
	//Users

routes
	.get('/analysts', AnalystsController.index)
	.post('/analysts', AnalystsController.create)
	//Analysts

routes
	.get('/audits', AuditsController.index)
	//Audits

routes
	.get('/cards', CardsController.index)
	.post('/cards', CardsController.create)
	.put('/cards/:id', CardsController.update)
module.exports = routes
