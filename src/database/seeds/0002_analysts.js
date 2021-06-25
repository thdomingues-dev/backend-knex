const bcrypt = require('bcryptjs')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('analysts').del()
    .then( async function () {
      // Inserts seed entries
			const hashPassword = await bcrypt.hash('123456', 10)

      return knex('analysts').insert([
        {
					user_id: 1,
					email: 'ts.tkd2@gmail.com',
					password: hashPassword,
					roles: ['n1', 'n2']
				}
      ]);
    });
};
