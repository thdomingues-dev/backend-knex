// Update with your config settings.
const parse = require("pg-connection-string").parse;

// Parse the environment variable into an object containing User, Password, Host, Port etc at separate key-value pairs
const pgconfig = parse(process.env.DATABASE_URL || '');

// Add SSL setting to default environment variable on a new key-value pair (the value itself is an object)
pgconfig.ssl = { rejectUnauthorized: false };

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
		connection: {
			host: 'ec2-44-198-146-224.compute-1.amazonaws.com',
			database: 'de2ka2s6phcj7q',
			user: 'zozbrmphfnahzd',
			port: '5432',
			password: 'b5e1b53aa94c5379fc00e430c718d347723ccf1cf64a7e145c5d72a474ff5d10',
			uri: 'postgres://zozbrmphfnahzd:b5e1b53aa94c5379fc00e430c718d347723ccf1cf64a7e145c5d72a474ff5d10@ec2-44-198-146-224.compute-1.amazonaws.com:5432/de2ka2s6phcj7q',
			ssl: { rejectUnauthorized: false }
		},
		migrations: {
			tableName: 'knex_migrations',
			directory: `${__dirname}/src/database/migrations`
		},
		seeds: {
			directory: `${__dirname}/src/database/seeds`
		}
  }
};
