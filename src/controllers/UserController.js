const knex = require("../database")

module.exports = {
	async index (req, res, next) {
		try {
			const { page = 1 } = req.query

			const [count] = await knex('users').count()
			res.header('X-Total-Count', count['count'])

			const result = await knex('users')
				.limit(5)
				.offset((page - 1) * 5)

			return res.json(result)
		} catch (error) {
			next(error)
		}
	},

	async create(req, res, next) {
		try {
			const {
				name,
				email,
				document,
				enabledFeatures,
				metadatas,
				address,
				salaryBase
			} = req.body

			await knex('users').insert({
				name,
				email,
				document,
				enabledFeatures,
				metadatas,
				address,
				salaryBase
			})

			return res.status(201).send('Usuário criado com sucesso')
		} catch (error) {
			next(error)
		}
	},

	async update(req, res, next) {
		try {
			const { name } = req.body
			const { id } = req.params

			await knex('users').update({ name }).where({ id })

			return res.send()
		} catch (error) {
			next(error)
		}
	},

	async delete(req, res, next) {
		try {
			const { id } = req.params

			await knex('users')
				.where({ id })
				.del()

				return res.send()
		} catch (error) {
			next(error)
		}
	}
}
