const config = require("./utils/config");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const middleware = require("./utils/middleware");
const personsRouter = require("./controllers/persons");
const usersRouter = require("./controllers/users");
const loginRouter = require('./controllers/login');
const mongoose = require("mongoose");

console.log("connecting to", process.env.MONGODB_URI);

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch(error => {
    console.log("error connection to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.static("build"));
app.use(bodyParser.json());
app.use(middleware.requestLogger);

app.use("/api/persons", personsRouter);
app.use("/api/users", usersRouter);
app.use('/api/login', loginRouter);

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app



