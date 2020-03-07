const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const exercicesRoute = require("./routes/exercice");
const usersRoute = require("./routes/user");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());
app.use("/users", usersRoute);
app.use("/exercises", exercicesRoute);

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});


const connection = mongoose.connection;

connection.once("open", () => console.log("connected to DB..."));

app.listen(port, () =>
  console.log(`... 🚀 your server is running on port : ${port}`)
);
