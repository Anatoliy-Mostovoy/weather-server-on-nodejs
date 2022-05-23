const express = require("express");
const router = express.Router();
const axios = require("axios").default;
require("dotenv").config();

const URL = process.env.MAIN_URL;

router.get("/", async (req, res, next) => {
  const { lat, lon } = req.query;
  const appid = process.env.API_OPENWEATHER_KEY;
  try {
    const response = await axios(URL, { params: { lat, lon, appid } });
    console.log(response.data);
    res.status(200).json(response.data);
    return;
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
    return;
  }
});

module.exports = router;
