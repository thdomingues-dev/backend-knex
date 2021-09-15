// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'knex_db',
      user: 'th',
      password: '1'
    },
		migrations: {
			tableName: 'knex_migrations',
			directory: `${__dirname}/src/database/migrations`
		},
		seeds: {
			directory: `${__dirname}/src/database/seeds`
		}
  },
	onUpdateTrigger: table => `
	CREATE TRIGGER ${table}_updated_at
	BEFORE UPDATE ON ${table}
	FOR EACH ROW
	EXECUTE PROCEDURE on_update_timestamp();
	`,

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
		connection: process.env.DATABASE_URL,
		migrations: {
			tableName: 'knex_migrations',
			directory: `${__dirname}/src/database/migrations`
		},
		seeds: {
			directory: `${__dirname}/src/database/seeds`
		}
  }
};
