import express from 'express';
import { getAllPostsHandler, getPostByIdHandler, createPostHandler, updatePostHandler, deletePostHandler } from '../controllers/postController.js';
import { validateId } from '../middleware/postValidators.js';

const router = express.Router();
router.get('/', getAllPostsHandler);
router.get('/:id', validateId, getPostByIdHandler);
router.post('/', createPostHandler);
router.put('/:id', updatePostHandler);
router.delete('/:id', deletePostHandler)

export default router;