const db = require("../data/db.config.js");

module.exports = {
  find,
  findById,
  add,
  remove,
  update
};

function find() {
  return db("issues");
}

function findById(id) {
  return db("issues").where({ id });
}

function add(issue) {
  return db("issues").insert(issue);
}

function remove(id) {
  return db("issues")
    .where({ id })
    .del();
}

function update(changes, id) {
  return db("issues")
    .where({ id })
    .update(changes);
}
