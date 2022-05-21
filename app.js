const express = require("express");
const res = require("express/lib/response");
const router = require("./routs/weather");
const app = express();

app.use("/weather", router);
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

module.exports = app;
