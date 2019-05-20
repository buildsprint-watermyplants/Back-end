exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("plants")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("plants").insert([
        { id: 1, plantName: "Watermelon" },
        { id: 2, plantName: "Tomato" },
        { id: 3, plantName: "Sunflower" }
      ]);
    });
};
