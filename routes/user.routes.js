const express = require("express");
const userModel = require("../models/user.models");

const app = express.Router();

// get all user and send reponse as highest to lowest score=============
app.get("/", async (req, res) => {
  try {
    let user = await userModel.find();
    user = user.sort((a, b) => b.score - a.score);
    res.send({ data: user });
  } catch (err) {
    res.status(500).send({
      message: "unable to fetch data at this moment, please try after sometime",
    });
  }
});

// user add function========================================
app.post("/", async (req, res) => {
  try {
    let newUser = await userModel.create(req.body);
    res
      .status(200)
      .send({ data: newUser, message: "user added to the database" });
  } catch (err) {
    res.status(500).send({ message: "server error while at adding the data" });
  }
});

// score updater function======================================================
app.put("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let score = req.body;
    let user = await userModel.updateOne({ _id: id }, { $set: score });
    res.status(200).send({ data: user, message: "score updated successfull" });
  } catch (err) {
    res.status(500).send({ message: "server error while at adding the data" });
  }
});

module.exports = app;
