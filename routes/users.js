const express = require("express");

const router = express.Router();

const restricted = require("../helpers/auth/restricted");

const Users = require("../db/models/User");

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get("/:id", restricted, (req, res) => {
  Users.findById(req.params.id)
    .then(user => {
      res.json(user);
    })
    .catch(err => res.send(err));
});

module.exports = router;
