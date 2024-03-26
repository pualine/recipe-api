import express from "express"
import cors from "cors"
import recipeApi from "./routes/recipeApi.routes.js"
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load env variable
dotenv.config({path:'.env.local'});

// create app
const app = express();

// create middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

// create routes
app.use('/recipes', recipeApi)

// MAKE CONNECTION
await mongoose.connect(process.env.MONGO_URI)


// listen to port
app.listen(4000, ()=> {
    console.log('App is running successfully!');
});