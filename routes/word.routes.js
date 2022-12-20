const express = require("express");

const app = express.Router();

app.get("/", (req, res) => {
  let length = Math.floor(Math.random() * 9 + 1);
  let word = "";
  let char = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < length; i++) {
    word = word + char.charAt(Math.floor(Math.random() * char.length));
  }
  res.send({ word: word });
});

module.exports = app;
