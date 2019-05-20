exports.up = function(knex, Promise) {
  return knex.schema.createTable("plants", plants => {
    plants.increments();

    plants.string("plantName", 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("plants");
};
