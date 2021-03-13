require("dotenv").config();
const express = require("express");
const app = express();

require("./config/db.config")();
require("./config/middleware.config")(app);
require("./config/session.config")(app);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const dailyGoalRoutes = require("./routes/dailyGoal.routes");
app.use("/dailyGoal", dailyGoalRoutes)

// const todoRoutes = require("./routes/todo.routes");
// app.use("/todo", todoRoutes);

app.listen(process.env.PORT, () => console.log("Server running"));
