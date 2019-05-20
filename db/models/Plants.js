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
  return db("plants").select("id");
}

function findBy(filter) {
  return db("plants").where(filter);
}

async function add(plant) {
  const [id] = await db("plants").insert(plant);

  return findById(id);
}

function findById(id) {
  return db("plants")
    .select("id")
    .where({ id })
    .first();
}

function remove(id) {
  return db("plants")
    .where({ id })
    .first()
    .del();
}

function findByIdAndUpdate(plant, id) {
  return db("plants")
    .where({ id })
    .update(plant);
}
