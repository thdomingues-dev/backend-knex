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
					birthDate: '01/01/2000',
					enabledFeatures: [1, 2],
					metadatas: JSON.stringify({ validDocument: false, verified: false }),
					address: JSON.stringify({
						city: 'São Paulo',
						state: 'SP',
						postalCode: '78055-000',
						streetNumber: 223
					}),
					salaryBase: 1132132,
				}
      ]);
    });
};
