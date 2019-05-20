exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("plants")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("plants").insert([
        // User 1
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
        },
        // User 2
        { plantName: "Rose", dailyWaterTime: "16:00:00", user_id: 2 },
        { plantName: "Bamboo", dailyWaterTime: "06:30:00", user_id: 2 },
        { plantName: "Pumpkin", dailyWaterTime: "22:00:00", user_id: 2 },
        // User 3
        {
          plantName: "Apple Tree",
          dailyWaterTime: "13:00:00",
          user_id: 3
        },
        { plantName: "Daisy", dailyWaterTime: "08:00:00", user_id: 3 },
        { plantName: "Basil", dailyWaterTime: "7:30:00", user_id: 3 }
      ]);
    });
};
