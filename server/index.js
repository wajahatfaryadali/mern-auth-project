import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js"

const PORT = 3000;
const app = express();
dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(() => {
    console.log(`DB connected !`)
    app.listen(PORT, () => {
        console.log(`App is listening on port ${PORT}`)
    })
}).catch((error) => {
    console.log('error while connecting to db *** ', error)
})


app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

app.use((err, req, res, next) => {

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error!'

    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})