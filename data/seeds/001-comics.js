
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, title: 'JL:D', issue: '1'},
        {id: 2, title: 'JL:D', issue: '2'},
        {id: 3, title: 'JL:D', issue: '3'}
      ]);
    });
};
