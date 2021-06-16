
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('audits').del()
    .then(function () {
      // Inserts seed entries
      return knex('audits').insert([
        {
					analyst_id: 1,
					type: 'status_change',
					before: {	status: 'approved' },
					after: { status: 'rejected'	}
				}
      ]);
    });
};
