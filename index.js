const express = require("express");

const app = express();

app.use(express.json());

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");

app.use("/auth/", authRoutes);
app.use("/api/", userRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}.`);
});
