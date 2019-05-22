const express = require("express");
const momentTimeZone = require("moment-timezone");
const moment = require("moment");
const Reminder = require("../db/models/Reminders");
const router = express.Router();

const getTimeZones = function() {
  return momentTimeZone.tz.names();
};

router.get("/", function(req, res, next) {
  Reminder.find().then(reminders => {
    res.status(200).json(reminders);
  });
});

router.get("/:id", function(req, res, next) {
  const id = req.params.id;
  Plant.findOne({ _id: id }).then(function(plant) {});
});

router.post("/", function(req, res, next) {
  const plantName = req.body.plantName;
  const phoneNumber = req.body.phoneNumber;
  const notification = req.body.notification;
  const timeZone = req.body.timeZone;
  const time = moment(req.body.time, "hh:mma");

  const reminder = new Reminder({
    plantName: plantName,
    phoneNumber: phoneNumber,
    notification: notification,
    timeZone: timeZone,
    time: time
  });
  reminder
    .save()
    .then(reminder => res.json(reminder))
    .catch(err => res.json(err));
});

router.put("/:id", function(req, res, next) {
  const id = req.params.id;
  const plantName = req.body.plantName;
  const phoneNumber = req.body.phoneNumber;
  const notification = req.body.notification;
  const timeZone = req.body.timeZone;
  const time = moment(req.body.time, "MM-DD-YYYY hh:mma");

  Reminder.findOne({ _id: id }).then(function(plant) {
    plant.plantName = plantName;
    plant.phoneNumber = phoneNumber;
    plant.notification = notification;
    plant.timeZone = timeZone;
    plant.time = time;

    Reminder.save().then(function() {});
  });
});

// POST: /plants/:id/delete
router.post("/:id/delete", function(req, res, next) {
  const id = req.params.id;

  Reminder.remove({ _id: id }).then(function() {});
});

module.exports = router;
