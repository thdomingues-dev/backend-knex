
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('analysts').del()
    .then(function () {
      // Inserts seed entries
      return knex('analysts').insert([
        {
					user_id: 1,
					email: 'ts.tkd2@gmail.com',
					password: '123456',
					roles: ['n1', 'n2']
				}
      ]);
    });
};
