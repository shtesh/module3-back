const mongoose = require("mongoose");

const DailyGoal = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  caloriesGoal: {
    type: Number,
    require: true,
  },
  currentCalories: {
    type: Number,
    require: true,
    default: 0,
  },
  meals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Meal",
    },
  ],
});

module.exports = mongoose.model("DailyGoal", DailyGoal);
