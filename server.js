const express = require("express");
const app = express();
const SERVERPORT = process.env.PORT || 7000;

const pool = require("./config/db");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(SERVERPORT, () => {
  console.log(`Server is running on port ${SERVERPORT}`);
});
