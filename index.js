const express = require("express");
const connect = require("./db/db");
const cors = require("cors");
const app = express();
const userRouter = require("./routes/user.routes");
const wordRouter = require("./routes/word.routes");
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/randomwords", wordRouter);

app.get("/", (req, res) => {
  res.send("welceome to mock 13 database");
});

app.listen(PORT, async () => {
  await connect();
  console.log(`server started at ${PORT}`);
});
