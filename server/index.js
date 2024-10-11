import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const PORT = 3000;
const app = express();
dotenv.config();


mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(() => {
    console.log(`DB connected !`)
    app.listen(PORT, () => {
        console.log(`App is listening on port ${PORT}`)
    })
}).catch((error) => {
    console.log('error while connecting to db *** ', error)
})


