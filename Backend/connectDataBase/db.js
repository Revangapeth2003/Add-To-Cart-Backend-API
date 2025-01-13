import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/addtocart")
  .then(() => {
    console.log("The db is connected");
  })
  .catch((err) => console.error(err));
