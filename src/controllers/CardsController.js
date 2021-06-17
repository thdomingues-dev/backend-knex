const knex = require('../database')

module.exports = {
	async index(req, res, next) {
		try {
			const { page = 1 } = req.query

			const [count] = await knex('cards').count()
			res.header('X-Total-Count', count['count'])

			const result = await knex('cards')
				.limit(10)
				.offset((page - 1) * 10)

			return res.json(result)
		} catch (error) {
			next(error)
		}
	}
}
