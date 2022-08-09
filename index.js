const express = require("express");
const app = express();
const port = 8000;
const gameOfThrones = require("./routes/gameOfThrones");
const pokemon = require("./routes/pokemon");

app.get("/", (req, res) => {
  res.send("Game of Thrones & Pokemon");
});

app.use("/game-of-thrones", gameOfThrones);
app.use("/pokemon", pokemon);



app.listen(port, () => console.log(`listening on port ${port}`));
