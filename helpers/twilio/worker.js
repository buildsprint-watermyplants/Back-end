const Reminder = require("../../db/models/Reminders");

const notificationWorkerFactory = function() {
  return {
    run: function() {
      Reminder.sendNotifications();
      console.log("Ran notifications.");
    }
  };
};

module.exports = notificationWorkerFactory();
