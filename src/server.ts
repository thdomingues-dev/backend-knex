require("dotenv").config()

import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

//not found
app.use((_req,_res, next) => {
	const error: any = new Error('Not Found')
	error.status = 404
	next(error)
})

//catch all
app.use((error, _req, res, _next) => {
	res.status(error.status || 500)
	res.json({ error: error.message})
})

app.listen(process.env.PORT || 3001, () => console.log('Server is running'))
