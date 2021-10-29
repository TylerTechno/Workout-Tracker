const router = require("express").Router()

const vRoutes = require("../routes/v-routes")

router.use("/", vRoutes)

module.exports = router