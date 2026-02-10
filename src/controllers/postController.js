import { getAllPosts, getPostById } from '../services/postServices.js';

export function getAllPostsHandler(req, res) {
    let posts = getAllPosts();
    res.status(200).json(posts);
}

export function getPostByIdHandler(req, res) {
    const id = parseInt(req.params.id);
    const post = getPostById(id);

    if (post) {
        return res.status(200).json(post);
    } else {
        res.status(400).json({error: `Post ${id} not found`});
    }
}