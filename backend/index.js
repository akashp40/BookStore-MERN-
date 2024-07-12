// const express = require('express')
import express from "express";
import mongoose from "mongoose";
import bookRoute from "./route/Book.route.js";
import cors from "cors";
import userRoute from "./route/User.Route.js"


const app = express();
app.use(cors())
app.use(express.json());

const port = process.env.PORT || 4001;

//steps to connect mongo DB
//--------------------------------------------
const URI = "mongodb://localhost:27017/bookStore";
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to mongoDB");
} catch (error) {
  console.log("error ", error);
}
//--------------------------------------

//defining routes

app.use("/book",bookRoute)
app.use("/user",userRoute)


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});



