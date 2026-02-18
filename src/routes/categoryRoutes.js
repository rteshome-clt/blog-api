import express from 'express';
import { getAllCatsHandler, getCatByIdHandler, createCatHandler, updateCatHandler, deleteCatHandler } from '../controllers/categoryController.js';
import {
  validateCategoryId,
  validateCreateCategory,
  validateUpdateCategory,
} from "../middleware/categoryValidators.js";

const router = express.Router();
router.get("/", getAllCatsHandler);
router.get("/:id", validateCategoryId, getCatByIdHandler);
router.post("/", validateCreateCategory, createCatHandler);
router.put("/:id", validateCategoryId, validateUpdateCategory, updateCatHandler);
router.delete("/:id", validateCategoryId, deleteCatHandler);


export default router;