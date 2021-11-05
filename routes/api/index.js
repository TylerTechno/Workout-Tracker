const router = require("express").Router()
const workoutRoutes = require("./Workout-Routes")

router.use("/workouts", workoutRoutes)


module.exports = router