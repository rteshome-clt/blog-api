import {getAll, getById, create, update, remove } from '../repositories/postRepo.js';


export function getAllPosts() {
    return getAll();
}

export function getPostById(id) {
    return getById(id);
}

export function createPost(postData) {
    return create(postData);
}

export function updatePost(id, updatedData) {
    return update(id, updatedData);
}

export function deletePost(id) {
    return remove(id);
}
