const mongoose = require("mongoose");

const Food = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  calories: {
    type: Number,
    require: true,
  },
  image: {
    type: String,
  },
  fat: {
    type: Number,
  },
  carbohydrates: {
    type: Number,
  },
  protein: {
    type: Number,
  },
});
module.exports = mongoose.model("Food", Food);
