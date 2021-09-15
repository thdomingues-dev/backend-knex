const { onUpdateTrigger } = require('../../../knexfile')

exports.up = knex => knex.schema.createTable('cards', table => {
	table.increments('id')
	table.integer('user_id').references('users.id').notNullable().onDelete('CASCADE')
	table.json('metadatas').notNullable()
	table.text('status').notNullable()

	table.timestamps(true, true)
}).then(() => knex.raw(onUpdateTrigger('cards')))

exports.down = knex => knex.schema.dropTable('cards')
