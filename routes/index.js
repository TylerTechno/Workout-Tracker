const router = require("express").Router()
const apiRoutes = require("./api")
const vRoutes = require("../routes/v-routes")
router.use("/api", apiRoutes)
router.use("/", vRoutes)

module.exports = router