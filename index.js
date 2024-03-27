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
app.use(express.static("uploads"));

// create routes
app.use('/recipes', recipeApi)

// MAKE CONNECTION
await mongoose.connect(process.env.MONGO_URI)


// listen to port
const port = process.env.PORT || 4000;
app.listen(port, ()=> {
    console.log(`App is running on ${port} successfully!`);
});