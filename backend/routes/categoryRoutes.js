import express from 'express';
import { isAdmin, requireSignIN } from '../middlewares/authMiddleware.js';
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from '../controllers/categoryController.js';

const router = express.Router()

//Routes 
//Create category..
router.post('/create-category',requireSignIN,isAdmin,createCategoryController)

//Update category..
router.put('/update-category/:id',requireSignIN,isAdmin,updateCategoryController)

// get All Category..
router.get ('/get-category',categoryController)

//Single category..
router.get('/single-category/:slug',singleCategoryController)

//delete category
router.delete( "/delete-category/:id", requireSignIN,isAdmin,deleteCategoryController);
  

export default router;