const express = require("express");
const  router  = require("./src/routes/api");
const cookieParser = require('cookie-parser')
const app = new express();

//security Middleware import
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const hpp = require('hpp')
const cors = require('cors')

//security Middleware Implement

app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())
app.use(express.json())
app.use(cookieParser())

//  rate limiting middleware
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100
})


app.use(limiter)


app.use("/api/v1", router)
app.use("*", (req, res)=>{
    res.status(404).json({status:"fail",data:"not found"})
})

module.exports = app