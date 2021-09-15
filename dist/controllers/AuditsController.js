const knex = require('../database')

module.exports = {
	async index (req, res, next) {
		try {
			const { analyst_id, page = 1 } = req.query
			const query = knex('audits')
				.limit(10)
				.offset((page - 1) * 10)

			const [count] = await knex('audits').count()
			res.header('X-Total-Count', count['count'])

			if (analyst_id) query.where({analyst_id})

			const result = await query

			return res.json(result)
		} catch (error) {
			next(error)
		}
	}
}
