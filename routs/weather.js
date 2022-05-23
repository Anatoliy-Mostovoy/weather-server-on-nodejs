const express = require("express");
const router = express.Router();
const axios = require("axios").default;
const { query, validationResult } = require("express-validator");
require("dotenv").config();

const URL = process.env.MAIN_URL;

router.get(
  "/",
  [query("lat").isNumeric(), query("lon").isNumeric()], //* мидлвары валидации
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { lat, lon } = req.query;
    const appid = process.env.API_OPENWEATHER_KEY;
    try {
      const response = await axios(URL, { params: { lat, lon, appid } });
      res.status(200).json(response.data);
    } catch (error) {
      res.status(400).json({ message: "Bad request" });
    }
  }
);

module.exports = router;
