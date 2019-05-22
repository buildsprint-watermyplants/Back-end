require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const scheduler = require("./helpers/twilio/scheduler");

const app = express();

mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true })
  .then(res => console.log(`Connected to MongoDB.`));

app.use(helmet());
app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const plantRoutes = require("./routes/plants");
const twilioRoutes = require("./routes/twilio");

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/plants", plantRoutes);
app.use("/api/twilio", twilioRoutes);

const port = process.env.PORT || 3000;

scheduler.start();

app.listen(port, () => {
  console.log(`Server running on port: ${port}.`);
});
