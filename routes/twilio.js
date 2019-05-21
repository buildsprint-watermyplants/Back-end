const express = require("express");
const momentTimeZone = require("moment-timezone");
const moment = require("moment");
const Reminder = require("../db/models/Reminders");
const router = express.Router();

const getTimeZones = function() {
  return momentTimeZone.tz.names();
};

// GET: /plants
router.get("/", function(req, res, next) {
  Reminder.find().then(reminders => {
    res.status(200).json(reminders);
  });
});

// GET: /plants/create
router.get("/create", function(req, res, next) {
  res.send({
    timeZones: getTimeZones(),
    reminder: new Reminder({
      plantName: "",
      phoneNumber: "",
      notification: "",
      timeZone: "",
      time: ""
    })
  });
});

// POST: /plants
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

// GET: /plants/:id/edit
router.get("/:id/edit", function(req, res, next) {
  const id = req.params.id;
  Plant.findOne({ _id: id }).then(function(plant) {});
});

// POST: /plants/:id/edit
router.post("/:id/edit", function(req, res, next) {
  const id = req.params.id;
  const plantName = req.body.plantName;
  const phoneNumber = req.body.phoneNumber;
  const notification = req.body.notification;
  const timeZone = req.body.timeZone;
  const time = moment(req.body.time, "MM-DD-YYYY hh:mma");

  Reminders.findOne({ _id: id }).then(function(plant) {
    plant.plantName = plantName;
    plant.phoneNumber = phoneNumber;
    plant.notification = notification;
    plant.timeZone = timeZone;
    plant.time = time;

    Reminders.save().then(function() {});
  });
});

// POST: /plants/:id/delete
router.post("/:id/delete", function(req, res, next) {
  const id = req.params.id;

  Reminders.remove({ _id: id }).then(function() {});
});

module.exports = router;

// const express = require("express");
// const twilio = require("twilio");
// const keys = require("../config/keys");
// const client = require("twilio")(keys.twilioAccountSid, keys.twilioAuthToken);
// const CronJob = require("cron").CronJob;
// const notificationsWorker = require("./workers/notificationsWorker");
// const moment = require("moment");

// const router = express.Router();

// const restricted = require("../helpers/auth/restricted");

// const Plants = require("../db/models/Plants");

// router.post("/create", (req, res) => {
//   const { phoneNumber } = req.body;
//   client.messages
//     .create({
//       from: keys.twilioNumber,
//       body: "It's time to water your plants!",
//       to: phoneNumber
//     })
//     .then(message => {
//       return res.status(200).json(message);
//     })
//     .catch(err => res.status(500).json(err));
// });

// const notificationWorkerFactory = function() {
//   return {
//     run: function() {
//       Plants.sendNotifications();
//     }
//   };
// };

// const schedulerFactory = function() {
//   return {
//     start: function() {
//       new CronJob(
//         "00 * * * * *",
//         function() {
//           console.log(
//             "Running Send Notifications Worker for " + moment().format()
//           );
//           notificationsWorker.run();
//         },
//         null,
//         true,
//         ""
//       );
//     }
//   };
// };

// module.exports = router;
