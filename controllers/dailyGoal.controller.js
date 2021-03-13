const DailyGoal = require("../model/dailyGoal.model");
const Meal = require("../model/meal.model");

exports.getDailyGoal = async (req, res) => {
  const dailyGoal = await DailyGoal.findById(req.params.dailyGoal);
  res.status(200).json(dailyGoal);
};

exports.createDailyGoal = async (req, res) => {
  const { userId } = req.session;
  const { caloriesGoal } = req.body;
  const newDailyGoal = await DailyGoal.create({ user: userId, caloriesGoal });
  res.status(200).json(newDailyGoal);
};

exports.updateDailyGoal = async (req, res) => {
  const { userId } = req.session;
  const { date, ...rest } = req.body;
  const newMeal = await Meal.create(rest);
  const dailyGoal = await DailyGoal.findOne({ date, user: userId });
  const totalCalories = Number(dailyGoal.currentCalories) = Number(rest.calories)
  const updateDailyGoal = await DailyGoal.findByIdAndUpdate(dailyGoal._id, 
    {
      $push: { meals: newMeal._id },
      currentCalories: totalCalories,
    },{ new: true });
  res.status(200).json(updateDailyGoal);
};

exports.deleteDailyGoal = async (req, res) => {
  await DailyGoal.findByIdAndDelete(req.params.dailyGoal);
  res.status(200).json({ message: "daily goal has been deleted"});
};


