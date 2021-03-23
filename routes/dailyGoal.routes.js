const { Router } = require("express");
const route = Router();
const {
  getDailyGoal,
  getDailyGoals,
  createDailyGoal,
  updateDailyGoal,
  deleteDailyGoal,
} = require("../controllers/dailyGoal.controller");

route
  .get("/", getDailyGoals)
  .get("/:dailyGoal", getDailyGoal)
  .post("/", createDailyGoal)
  .patch("/:dailyGoal", updateDailyGoal)
  .delete("/:dailyGoal", deleteDailyGoal);

module.exports = route;
