import express from 'express';
import { getAllPostsHandler, getPostByIdHandler } from '../controllers/postController.js';

const router = express.Router();
router.get('/', getAllPostsHandler);
router.get('/:id', getPostByIdHandler);

export default router;