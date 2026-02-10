import {getAll, getById, create } from '../repositories/postRepo.js';


export function getAllPosts() {
    return getAll();
}

export function getPostById(id) {
    return getById(id);
}

export function createPost(postData) {
    return create(postData);
}
