const router = require("express").Router()
const {chatbots} = require("./chatbot.controller")

router.get("/", chatbots)
module.exports = router