const knex = require('../database')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const authConfig = require('../config/auth.json')

module.exports = {
	async create(req, res, next) {
		try {
			const { email, password } = req.body

			const [user] = await knex('analysts')
				.where({ 'analysts.email': email })
				.join('users', 'analysts.user_id', 'users.id')
				.select(
					'analysts.*',
					'users.*',
				)

			if (!user) return res.status(400).send({ error: 'User not found.'})

			if (!await bcrypt.compare(password, user.password))
					return res.status(400).send({ error: 'Email/Password invalid'})

			const token = jwt.sign({ id: user.id }, authConfig.secret, {
				expiresIn: 86400
			})

			return res.send({ user, token })
		} catch (error) {
			next(error)
		}
	}
}
