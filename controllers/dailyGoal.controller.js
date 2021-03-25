const DailyGoal = require("../model/dailyGoal.model");
const Meal = require("../model/meal.model");

exports.getDailyGoal = async (req, res) => {
  try {
    const dailyGoal = await DailyGoal.findById(req.params.dailyGoal).lean();
    return res.status(200).json(dailyGoal);
  } catch (e) {
    return res.status(400).json(e);
  }
};
exports.getDailyGoals = async (req, res) => {
  try {
    const { userId } = req.session;
    const dailyGoals = await DailyGoal.find({ user: userId }).populate("meals");
    return res.status(200).json(dailyGoals);
  } catch (e) {
    return res.status(400).json(e);
  }
};

exports.createDailyGoal = async (req, res) => {
  try {
    const { userId } = req.session;
    if (!userId) {
      return res.status(401).json({ message: "no user" });
    }
    const { caloriesGoal } = req.body;
    const newDailyGoal = await DailyGoal.create({ user: userId, caloriesGoal });
    return res.status(200).json(newDailyGoal);
  } catch (e) {
    return res.status(400).json(e);
  }
};

exports.updateDailyGoal = async (req, res) => {
  try {
    const { dailyGoal: dailyGoalId } = req.params;
    const { date, ...rest } = req.body;
    const newMeal = await Meal.create(rest);
    const totalCalories =
      Number(dailyGoal.currentCalories) + Number(rest?.calories || 0);

    const updatedDailyGoal = await DailyGoal.findByIdAndUpdate(
      dailyGoalId,
      {
        $push: { meals: newMeal._id },
        currentCalories: totalCalories,
      },
      { new: true }
    );

    return res.status(200).json(updatedDailyGoal);
  } catch (e) {
    return res.status(500).json(e);
  }
};

exports.deleteDailyGoal = async (req, res) => {
  try {
    await DailyGoal.findByIdAndDelete(req.params.dailyGoal);
    return res.status(200).json({ message: "daily goal has been deleted" });
  } catch (e) {
    return res.status(400).json(e);
  }
};
