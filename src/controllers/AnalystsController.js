const knex = require("../database")

module.exports = {
	async index (req, res, next) {
		try {
			const { user_id, page = 1 } = req.query
			const query = knex('analysts')
				.limit(5)
				.offset((page - 1) * 5)

			const countObject = knex('analysts').count()

			if (user_id) {
				query
					.where({ user_id })
					.join('users', 'users.id', '=', 'analysts.user_id')
					.select('analysts.*', 'users.name', 'users.document')

				countObject
					.where({ user_id })
			}

			const [count] = await countObject
			res.header('X-Total-Count', count['count'])

			const result = await query

			return res.json(result)
		} catch (error) {
			next(error)
		}
	},
	async create(req, res, next) {
		try {
			const { user_id, email, password, roles	} = req.body

			await knex('analysts').insert({
				user_id,
				email,
				password,
				roles
			})

			return res.status(201).send()
		} catch (error) {
			next(error)
		}
	},
}
