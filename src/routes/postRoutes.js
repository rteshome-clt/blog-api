import express from 'express';
import { getAllPostsHandler, getPostByIdHandler, createPostHandler, updatePostHandler } from '../controllers/postController.js';

const router = express.Router();
router.get('/', getAllPostsHandler);
router.get('/:id', getPostByIdHandler);
router.post('/', createPostHandler);
router.put('/:id', updatePostHandler);

export default router;