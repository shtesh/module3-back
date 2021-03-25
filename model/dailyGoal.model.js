const mongoose = require("mongoose");

const DailyGoal = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
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
    description: {
      type: String,
    },
    title: {
      type: String,
      default: "Daily Goal",
      require: true,
    },
    meals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Meal",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("DailyGoal", DailyGoal);
