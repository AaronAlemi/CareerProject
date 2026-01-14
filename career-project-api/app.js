//Importing express / app
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
// Import Error Handling File

// Import Security middleware

// Importing Models and Routes

// Create Express Application
const app = express()

// Parse incoming request bodies
const corsOptions ={
    origin: '*',  // 'http://localhost:5173',
    credentials:true,            // access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions))

app.use(express.json())

// Serve the frontend files from the dist directory
// app.use(express.static('..career-project-ui/dist'));
app.use(morgan('tiny'))

// APP USE - Security Middleware to authenticate user and create JWTs
// app.use(security.extractUserFromJwt)

// APP USE - All authorization/registration routes including login, register, and me
// app.use("/auth", authRoutes)
// app.use("/group", groupRoutes)
// ...etc

// Server Health Check
app.get('/', async(req,res,next) => {
    res.status(200).json({"ping":"pong"})
})


app.use((req,res,next) => {
    return next(new NotFoundError())
})


app.use((error, req, res, next) => {
    const status = error.status || 500
    const message = error.message
    return res.status((status)).json({
        error: {message, status}
    })
})

module.exports = app
