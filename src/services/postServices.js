import {getAll, getById } from '../repositories/postRepo.js';


export function getAllPosts() {
    return getAll();
}

export function getPostById(id) {
    return getById(id);
}