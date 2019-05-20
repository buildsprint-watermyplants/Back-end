exports.up = function(knex, Promise) {
  return knex.schema.createTable("plants", plants => {
    plants.increments();

    plants.string("plantName", 128).notNullable();
    plants.time("dailyWaterTime");
    plants
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("plants");
};
