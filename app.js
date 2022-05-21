const express = require("express");
const router = require("./routs/weather");
const morgan = require("morgan");

const app = express();
app.use(morgan("tiny"));
app.use("/weather", router);
app.use((error, _req, res, next) => {
  res.status(500).json({ message: error.message });
});

module.exports = app;
