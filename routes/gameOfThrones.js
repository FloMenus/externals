const express = require("express");
const app = express();
const axios = require("axios");
const json = require("../got.json");

app.get("/json", (req, res) => {
  res.json(json);
});

app.get("/url", async (req, res) => {
  const result = await axios.get("https://thronesapi.com/api/v2/Characters");
  res.json(result.data);
});

module.exports = app;
