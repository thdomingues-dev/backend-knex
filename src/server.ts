const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

//not found
app.use((_req: any,_res: any, next: (arg0: Error) => void) => {
	const error: any = new Error('Not Found')
	error.status = 404
	next(error)
})

//catch all
app.use((error: any, _req: any, res: { status: (arg0: any) => void; json: (arg0: { error: any }) => void }, _next: any) => {
	res.status(error.status || 500)
	res.json({ error: error.message})
})

app.listen(3001, () => console.log('Server is running'))
