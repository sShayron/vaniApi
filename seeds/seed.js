
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('members').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('members').insert({name: 'Shayron Aguiar', email: 'shayron.aguiar@gmail.com'}),
        knex('members').insert({name: 'Gabriel Enrique', email: ''}),
        knex('members').insert({name: 'Jonson', email: ''}),
        knex('members').insert({name: 'Gatti', email: ''}),
        knex('members').insert({name: 'Erasmo', email: ''}),
        knex('members').insert({name: 'Blainer', email: ''}),
        knex('members').insert({name: 'Caio', email: ''}),
        knex('members').insert({name: 'Joivan', email: ''}),
        knex('members').insert({name: 'Petrius', email: ''}),
        knex('members').insert({ name: 'Melina', email: ''}),
        knex('members').insert({ name: 'Jesse', email: ''}),
      ]);
    });
};
