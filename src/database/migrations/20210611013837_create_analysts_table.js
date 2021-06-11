
exports.up = knex => knex.schema.createTable('analysts', table => {
	table.increments('id')
	table.integer('user_id')
		.references('users.id')
		.unique()
		.notNullable()
		.onDelete('CASCADE')
	table.text('email').unique().notNullable()
	table.text('password').notNullable()
	table.specificType('roles', 'text ARRAY').notNullable()

	table.timestamps(true, true)
})

exports.down = knex => knex.schema.dropTable('analysts')
