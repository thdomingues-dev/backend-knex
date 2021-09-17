
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {
					user_id: 1,
					name: "Thales Domingues",
					limit: 500000,
					status: 'new_card'
				}
      ]);
    });
};
