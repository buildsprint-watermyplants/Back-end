exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("plants")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("plants").insert([
        {
          plantName: "Watermelon",
          dailyWaterTime: "08:00:00",
          user_id: 1
        },
        { plantName: "Tomato", dailyWaterTime: "09:00:00", user_id: 1 },
        {
          plantName: "Sunflower",
          dailyWaterTime: "10:00:00",
          user_id: 1
        }
      ]);
    });
};
