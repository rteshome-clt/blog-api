import express from 'express';
import { getAllPostsHandler } from '../controllers/postController.js';

const router = express.Router();
router.get('/', getAllPostsHandler);

export default router;