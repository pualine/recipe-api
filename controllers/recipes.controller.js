import { RecipeModel } from "../models/recipe.js";

// Add reccipe
export const addRecipe = async (req, res, next) => {
  try {
    const createDatabase = await RecipeModel.create(req.body);
    res.status(201).json(createDatabase);
  } catch (error) {
    next(error);
  }
};

//  Get all recipes
export const getAllRecipes = async (req, res, next) => {
  try {
    const getResult = await RecipeModel.find();
    res.status(200).json(getResult);
  } catch (error) {
    next(error);
  }
};

// get a single recipe
export const getSingleRecipe = async (req, res, next) => {
  try {
    const getOneResult = await RecipeModel.findById({ _id: req.params.id });
    // return a status(404) result not found
    if (getOneResult === null) {
      res.status(404).json({
        message: `Recipe with ID: ${req.params.id} is Not Found`,
      });
    } else {
      res.status(200).json(getOneResult);
    }
  } catch (error) {
    next(error);
  }
};

// delete all recipes
export const deleteAllRecipes = async (req, res, next) => {
  try {
    const deletedRecords = await RecipeModel.deleteMany();
    res.status(200).json(deletedRecords);
  } catch (err) {
    next(err);
  }
};
// delete a single recipe
export const deleteRecipe = async (req, res, next) => {
  try {
    const deleteOne = await RecipeModel.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json("Deleted Successfully");
  } catch (error) {
    
  }
};

// Update a recipe
export const updateRecipe = async (req, res, next) => {
    try {
        const updateResult = await RecipeModel.findByIdAndUpdate({_id: req.params.id});
     res.status(200).json( "Update Successful" );
    } catch (error) {
        next(error);
    }
};
