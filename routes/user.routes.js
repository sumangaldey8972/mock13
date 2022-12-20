const express = require("express");
const userModel = require("../models/user.models");

const app = express.Router();

app.get("/", async (req, res) => {
  try {
    let user = await userModel.find();
    res.send({ data: user });
  } catch (err) {
    res.status(500).send({
      message: "unable to fetch data at this moment, please try after sometime",
    });
  }
});

app.post("/", async (req, res) => {
  try {
    let { email } = req.body;
    let user = await userModel.findOne({ email });
    if (user) {
      res.status(401).send({ message: "user email already exists" });
    } else {
      let newUser = await userModel.create(req.body);
      res
        .status(200)
        .send({ data: newUser, message: "user added to the database" });
    }
  } catch (err) {
    res.status(500).send({ message: "server error while at adding the data" });
  }
});

module.exports = app;
