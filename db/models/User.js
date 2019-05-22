const db = require("../dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove,
  findByIdAndUpdate,
  findPlantsByUserId
};

function find() {
  return db("users").select("id", "username", "phoneNumber");
}

function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  const [id] = await db("users").insert(user);

  return findById(id);
}

async function findById(id) {
  const users = await db("users")
    .where({ id })
    .first();

  const plants = await db("plants").where({ user_id: id });

  users["plants"] = plants;

  return users;
}

async function findPlantsByUserId(id) {
  const plants = await db("plants").where({ user_id: id });
  console.log(plants);
  return plants;
}

function remove(id) {
  return db("users")
    .where({ id })
    .first()
    .del();
}

function findByIdAndUpdate(user, id) {
  return db("users")
    .where({ id })
    .update(user);
}
