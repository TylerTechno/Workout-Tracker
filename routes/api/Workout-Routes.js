const { Workout } = require("../../models")

const router = require("express").Router()
//this route is api/workouts
router.get("/", async (req, res) => {
    try {
        var workoutData = await Workout.aggregate([
            {
                $addFields: {
                    totalDuration: {
                        $sum: "$exercises.duration"
                    }
                }
            }])
        res.json(workoutData)
    } catch (error) {
        res.status(500).json(error)
    }
})


router.post("/", async (req, res) => {
    try {
        var workoutData = await Workout.create(req.body)
        res.json(workoutData)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put("/:id", async (req, res) => {
    try {
        var workoutData = await Workout.findByIdAndUpdate(req.params.id, {
            $push: {
                exercises: req.body
            }

        })
        res.json(workoutData)


    } catch (error) {
        res.status(500).json(error)

    }
})

router.get("/range", async (req, res) => {
    try {
        var workoutData = await Workout.aggregate([
            {
                $addFields: {
                    totalDuration: {
                        $sum: "$exercises.duration"
                    }
                }
            }]).sort({ day: -1 }).limit(7).sort({ day: 1 })
        res.json(workoutData)

    } catch (error) {
        res.status(500).json(error)

    }
})


module.exports = router


