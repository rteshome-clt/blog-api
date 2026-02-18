import {getAll, getById, create, update, remove } from '../repositories/categoryRepo.js';


export function getAllCats() {
    return getAll();
}

export function getCatById(id) {
    const category = getById(id);
    if(category) return category;
    else {
        const error = new Error(`Category ${id} not found`);
        error.status = 404;
        throw error;
    }
}

export function createCat(catData) {
    return create(catData);
}

export function updateCat(id, updatedData) {
    const updatedCat =  update(id, updatedData);
    if(updatedCat) return updatedCat;
    else {
        const error = new Error(`Category ${id} not found`);
        error.status = 404;
        throw error;
    }
}

export function deleteCat(id) {
    const result = remove(id);
    if(result) return;
    else {
        const error = new Error(`Category ${id} not found`);
        error.status = 404;
        throw error;
    }
}

