import { categories, getNextId } from '../db/categories.js';

export function getAll() {
    return categories;
}

export function getById(id) {
    let category = categories.find((category) => category.id === id);
    return category;
}

export function getByName(name) {
    let category = categories.find((category) => category.name.trim().toLowerCase() === name.trim().toLowerCase());
    return category;
}

export function create(catData) {
    const newCategory = {
        id: getNextId(),
        name: catData.name,
    };

    categories.push(newCategory);
    return newCategory;
}

export function update(id, updatedData) {
    const category = categories.find(category => category.id === id);

    if (!category) return undefined;
    if (updatedData.name) category.name = updatedData.name;

    return category;
}

export function remove(id) {
    const index = categories.findIndex(category => category.id === id);

    if(index === -1) return false;
    categories.splice(index, 1);
    
    return true;
}
