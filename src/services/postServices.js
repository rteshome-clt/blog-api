import {getAll} from '../repositories/postRepo.js';

export function getAllPosts() {
    return getAll();
}