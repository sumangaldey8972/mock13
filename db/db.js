const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://sd:sd@cluster0.j2hf8kb.mongodb.net/mock13"
  );
};

module.exports = connect
