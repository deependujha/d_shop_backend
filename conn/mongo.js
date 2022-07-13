const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(
    `mongodb+srv://${process.env.USRNAME}:${process.env.PASSWD}@cluster0.5ocuc97.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log(`connected to mongodb`);
  })
  .catch((err) => {
    console.log(err);
  });
