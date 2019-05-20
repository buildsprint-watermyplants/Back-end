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

router.delete("/:id", restricted, (req, res) => {
  Users.remove(req.params.id)
    .then(deleted => {
      res.status(200).json({ message: "Deleted account." });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.put("/:id", restricted, (req, res) => {
  let user = req.body;
  let id = req.params.id;
  Users.findByIdAndUpdate(user, id)
    .then(updated => {
      res.status(201).json({ message: "Updated account." });
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to update account." });
    });
});

module.exports = router;
