const tableName = 'contact';

exports.up = async knex =>
  knex.schema.createTable(tableName, table => {
    table
      .increments('id')
      .primary()
      .unique();
    table.string('service');
    table.string('contact');
    table.integer('personId').notNullable();
    table.foreign('personId').references('person.id');
  });

exports.down = async knex => knex.schema.dropTable(tableName);
