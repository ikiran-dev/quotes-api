const express = require("express");
const app = express();
const quotes = require("./quotes.json");
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  // Get a random number between 1 and 100.
  const randomNumber = Math.floor(Math.random() * quotes.length) + 1;
  // Return the random number to the client.
  res.json(quotes[randomNumber]);
  console.log(randomNumber + " ---> " + quotes[randomNumber]);
  console.log("Total number of quotes " + quotes.length);
});

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
