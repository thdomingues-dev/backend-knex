const { json } = require("express");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
					name: 'Thales',
					email: 'ts.tkd2@gmail.com',
					document: '32132132-140',
					enabledFeatures: JSON.stringify({n1: true}),
					metadatas: JSON.stringify({n2: false}),
					address: 'Rua Nova Alvorada, Cuiabá',
					salaryBase: 1132132,
				}
      ]);
    });
};
