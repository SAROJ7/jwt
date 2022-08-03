require("dotenv").config();
require("express-async-errors");

const express = require("express");

const app = express();
const connectDB = require("./db/connect");
const errorHandlerMiddleware = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");

//Middleware
app.use(express.static("./public"));
app.use(express.json());

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = 5000 || process.env.PORT;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`App is listening at Port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
