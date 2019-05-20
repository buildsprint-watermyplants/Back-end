const db = require("../dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove,
  findByIdAndUpdate
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

function findById(id) {
  return db("users")
    .select("id", "username", "phoneNumber")
    .where({ id })
    .first();
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
