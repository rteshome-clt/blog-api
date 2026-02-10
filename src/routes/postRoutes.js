import express from 'express';
import { getAllPostsHandler, getPostByIdHandler, createPostHandler } from '../controllers/postController.js';

const router = express.Router();
router.get('/', getAllPostsHandler);
router.get('/:id', getPostByIdHandler);
router.post('/', createPostHandler);

export default router;