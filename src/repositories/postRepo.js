import { posts, getNextId } from '../db/posts.js';

export function getAll() {
    return posts;
}

export function getById(id) {
    let post = posts.find((post) => post.id === id);
    return post;
}

export function create(postData) {
    const newPost = {
        id: getNextId(),
        title: postData.title,
        content: postData.content,
        createdAt: new Date().toISOString(),
    };

    posts.push(newPost);
    return newPost;
}

export function update(id, updatedData) {
    const post = posts.find(post => post.id === id);

    if (!post) return undefined;
    if (updatedData.title) post.title = updatedData.title;
    if (updatedData.content) post.content = updatedData.content;

    return post;
}