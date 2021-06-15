const { onUpdateTrigger } = require('../../../knexfile')

exports.up = async knex => knex.schema.createTable('users', table => {
	table.increments('id')
	table.text('name').notNullable()
	table.text('email').unique().notNullable()
	table.text('document').unique().notNullable()
	table.json('enabledFeatures').notNullable()
	table.json('metadatas')
	table.text('address').notNullable()
	table.integer('salaryBase').notNullable()

	table.timestamp('created_at').defaultTo(knex.fn.now())
	table.timestamp('updated_at').defaultTo(knex.fn.now())
}).then(() => knex.raw(onUpdateTrigger('users')))

exports.down = knex => knex.schema.dropTable('users')
