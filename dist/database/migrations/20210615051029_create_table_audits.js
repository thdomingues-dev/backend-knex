
exports.up = knex => knex.schema.createTable('audits', table => {
	table.increments('id')
	table.integer('analyst_id').references('analysts.id').notNullable().onDelete('CASCADE')
	table.text('type').notNullable()
	table.json('before').notNullable()
	table.json('after').notNullable()

	table.timestamp('created_at').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable('audits')
