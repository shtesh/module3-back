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
  try {
    const { dailyGoal: dailyGoalId } = req.params;
    const { date, ...rest } = req.body;
    const newMeal = await Meal.create(rest);
    const dailyGoal = await DailyGoal.findById(dailyGoalId);
    const totalCalories =
      Number(dailyGoal.currentCalories) + Number(rest?.calories || 0);
    const updatedDailyGoal = await DailyGoal.findByIdAndUpdate(
      dailyGoal,
      {
        $push: { meals: newMeal._id },
        currentCalories: totalCalories,
      },
      { new: true }
    );

    return res.status(200).json(updatedDailyGoal);
  } catch (e) {
    return res.status(500).json({ e });
  }
};

exports.deleteDailyGoal = async (req, res) => {
  await DailyGoal.findByIdAndDelete(req.params.dailyGoal);
  res.status(200).json({ message: "daily goal has been deleted" });
};
