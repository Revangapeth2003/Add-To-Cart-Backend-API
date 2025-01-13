import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  Name: String,
  image: String,
  price: Number,
  rating: Number,
});

const Product = mongoose.model("Product", productSchema);

export default Product;
