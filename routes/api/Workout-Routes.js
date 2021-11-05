const router = require("express").Router()
//this route is api/workouts
router.get("/" , async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json(error)
    }
} )


module.exports = router


