const knex = require("../database")

module.exports = {
	async index (req, res) {
		const result = await knex('users')
		return res.json(result)
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
