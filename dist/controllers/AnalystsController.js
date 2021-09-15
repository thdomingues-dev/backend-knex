const knex = require('../database')
const bcrypt = require('bcryptjs')

module.exports = {
	async index (req, res, next) {
		try {
			const { user_id, email, page = 1 } = req.query

			const query = knex('analysts')
				.limit(5)
				.offset((page - 1) * 5)

			const countObject = knex('analysts').count()

			if (user_id) {
				query
					.where({ user_id })
					.join('users', 'users.id', '=', 'analysts.user_id')
					.select(
						'analysts.*',
						'users.name',
						'users.document',
						'users.deleted_at'
					)

				countObject
					.where({ user_id })
			}

			if (email || email === '') {
				query
					.where({ 'analysts.email': email })
					.join('users', 'analysts.user_id', 'users.id')
					.select(
						'analysts.*',
						'users.*',
					)

				countObject
					.where({ email })
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

			const hashPassword = await bcrypt.hash(password, 10)

			await knex('analysts').insert({
				user_id,
				email,
				password: hashPassword,
				roles
			})

			return res.status(201).send()
		} catch (error) {
			next(error)
		}
	},
}
