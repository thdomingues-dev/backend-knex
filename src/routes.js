const express = require('express')
const UserController = require('./controllers/UserController')
const AnalystsController = require('./controllers/AnalystsController')

const routes = express.Router()

routes
	.get('/users', UserController.index)
	.post('/users', UserController.create)
	.put('/users/:id', UserController.update)
	.delete('/users/:id', UserController.delete)
	//Users

routes
	.get('/analysts', AnalystsController.index)
	//Analysts

module.exports = routes
