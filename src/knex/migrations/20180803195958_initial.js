exports.up = knex =>
  knex.schema
  .createTable('person', table => {
    table
      .increments('id')
      .primary()
      .unique();
    table.string('name');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  });

exports.down = knex => knex.schema.dropTable('person');
