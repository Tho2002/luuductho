const mongoose = require("mongoose");

const listcarSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  brand: String,
  position: Number,

  category: String,
  thumbnail: String,
  status: String,
  delete: Boolean,
  deletedAt: Date,
});
const ListCar = mongoose.model("ListCar", listcarSchema, "listcar");
module.exports = ListCar;
