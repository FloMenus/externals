const express = require("express");
const app = express();
const axios = require("axios");

app.get("/all", async (req, res) => {
  const result = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
  );
  res.json(result.data);
});

app.get("/:id", async (req, res) => {
  try {
    const result = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${req.params.id}`
    );
    res.json(result.data);
  } catch (error) {
    res.status(404).json({ message: "Pokemon not found" });
  }
});

module.exports = app;
