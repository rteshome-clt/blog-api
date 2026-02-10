import {getAllPosts} from '../services/postServices.js';

export function getAllPostsHandler(req, res) {
    let posts = getAllPosts();
    res.status(200).json(posts);
}