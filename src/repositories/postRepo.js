import { posts } from '../db/posts.js';

export function getAll() {
    return posts;
}

export function getById(id) {
    let post = posts.find((post) => post.id === id);
    return post;
}