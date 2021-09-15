
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {
					user_id: 1,
					metadatas: {
						name: "Thales Domingues",
						digits: 1231233213,
						limit: 500000
					},
					status: 'pending'
				}
      ]);
    });
};
