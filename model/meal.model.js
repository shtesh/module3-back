const mongoose = require("mongoose");

const Meal = new mongoose.Schema({
    title: {
      type: String,
      enum: ["Breakfast", "Lunch", "Dinner", "Snacks"],
      require: true,
    },
    calories: {
      type: Number,
      require: true,
    },
    description: {
      type: String,
    },
  });

module.exports = mongoose.model("Meal", Meal);