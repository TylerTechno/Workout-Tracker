const router = require("express").Router()


router.get("/exercise", (req, res) => {
    res.sendFile("../public/exercise.html")
})

module.exports = router