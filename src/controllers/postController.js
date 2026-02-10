import { getAllPosts, getPostById, createPost, updatePost, deletePost } from '../services/postServices.js';

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
        res.status(404).json({error: `Post ${id} not found`});
    }
}

export function createPostHandler(req, res) {
    const {title, content} = req.body;
    const newPost = createPost({title, content});

    res.status(201).json(newPost);
}

export function updatePostHandler(req, res) {
    const id = parseInt(req.params.id);
    const {title, content} = req.body;
    const updatedPost = updatePost(id, {title,content});

    if (updatedPost) {
        return res.status(200).json(updatedPost);
    } else {
        res.status(404).json({error: `Post ${id} not found`});
    }
}

export function deletePostHandler(req, res) {
    const id = parseInt(req.params.id);
    const result = deletePost(id);

    if (result) {
        return res.status(204).send();
    } else {
        res.status(404).json({error: `Post ${id} not found`});
    }
}
