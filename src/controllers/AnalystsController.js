const knex = require("../database")

module.exports = {
	async index (req, res, next) {
		try {
			const { user_id } = req.query;
			const query = knex('analysts')

			if (user_id) {
				query
					.where({ user_id })
					.join('users', 'users.id', '=', 'analysts.user_id')
					.select('analysts.*', 'users.name', 'users.document')
			}

			const result = await query

			return res.json(result)
		} catch (error) {
			next(error)
		}
	},
}
