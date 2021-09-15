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
	},

	async create(req, res, next) {
		try {
			const {
				user_id,
				metadatas: {
					name,
					digits,
					limit
				},
				status
			} = req.body

			const cardResponse = await knex('cards').returning('*').insert({
				user_id,
				metadatas: {
					name,
					digits,
					limit
				},
				status
			})

			return res.status(201).json({ cardResponse})
		} catch (error) {
			next(error)
		}
	},

	async update(req, res, next) {
		try {
			const { id } = req.params
			const { metadatas, status } = req.body

			metadatas ? await knex('cards').update({ metadatas }).where({ id }) : null
			status ? await knex('cards').update({ status }).where({ id }) : null

			if (metadatas || status) return res.status(200).json({ response: "card updated."})
			return res.status(400).json({ response: "bad request, try again" })
		} catch (error) {
			next(error)
		}
	},
}
