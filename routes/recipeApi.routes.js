import { Router } from "express";
import { addRecipe, deleteRecipe, getAllRecipes, getSingleRecipe, updateRecipe } from "../controllers/recipes.controller.js";
import multer from "multer";


// create multer upload middleware
const  upload = multer({dest:  'uploads/images'});

// create recipe router
const router = Router()
const uri = process.env.MONGO_URI;


// Define routes
router.post('/', upload.single("image"), addRecipe);

// Get All recipes
router.get('/', getAllRecipes);

// single recipe
router.get('/:id', getSingleRecipe);

router.delete('/:id', deleteRecipe );

router.patch('/:id', updateRecipe );

export default router;
