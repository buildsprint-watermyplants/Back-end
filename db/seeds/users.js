exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "Buzz", password: "password" },
        { id: 2, username: "Woody", password: "password" },
        { id: 3, username: "Jesse", password: "password" }
      ]);
    });
};
