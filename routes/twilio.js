const express = require("express");
const twilio = require("twilio");
const keys = require("../config/keys");
const client = require("twilio")(keys.twilioAccountSid, keys.twilioAuthToken);

const router = express.Router();

const restricted = require("../helpers/auth/restricted");

router.post("/create", (req, res) => {
  const { phoneNumber } = req.body;
  client.messages
    .create({
      from: keys.twilioNumber,
      body: "It's time to water your plants!",
      to: phoneNumber
    })
    .then(message => {
      return res.status(200).json(message);
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
