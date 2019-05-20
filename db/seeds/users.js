exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "Buzz",
          password: "password",
          phoneNumber: "5551234567"
        },
        {
          username: "Woody",
          password: "password",
          phoneNumber: "5552345678"
        },
        {
          username: "Jesse",
          password: "password",
          phoneNumber: "5553456789"
        }
      ]);
    });
};
