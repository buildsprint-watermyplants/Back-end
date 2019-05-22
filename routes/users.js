const express = require("express");

const router = express.Router();

const restricted = require("../helpers/auth/restricted");

const Users = require("../db/models/User");

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      if (users) {
        return res.status(200).json(users);
      } else {
        return res.status(404).json({ error: "Could not find users." });
      }
    })
    .catch(err => res.status(500).send(err));
});

router.get("/:id", restricted, (req, res) => {
  Users.findById(req.params.id)

    .then(user => {
      if (user) {
        return res.status(200).json(user);
      } else {
        return res.status(404).json({ error: "Could not find user." });
      }
    })
    .catch(err => res.send(err));
});

router.get("/:id/plants", restricted, (req, res) => {
  Users.findPlantsByUserId(req.params.id)
    .then(userPlants => {
      if (userPlants) {
        return res.status(200).json(userPlants);
      } else {
        return res.status(404).json({ error: "Could not find user." });
      }
    })
    .catch(err => res.send(err));
});

router.delete("/:id", restricted, (req, res) => {
  Users.remove(req.params.id)
    .then(deleted => {
      if (deleted) {
        return res.status(200).json({ message: "Deleted user." });
      } else {
        return res
          .status(404)
          .json({ message: "Could not find and delete user." });
      }
    })
    .catch(error => res.status(500).json(error));
});

router.put("/:id", restricted, (req, res) => {
  let user = req.body;
  let id = req.params.id;
  Users.findByIdAndUpdate(user, id)
    .then(updated => {
      if (updated) {
        return res.status(200).json({ message: "Updated user." });
      } else {
        return res
          .status(404)
          .json({ message: "Could not find and update user." });
      }
    })
    .catch(error => res.status(500).json(error));
});

module.exports = router;
