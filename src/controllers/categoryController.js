import { getAllCats, getCatById, createCat, updateCat, deleteCat } from '../services/categoryService.js';

export function getAllCatsHandler(req, res) {
    let categories = getAllCats();
    res.status(200).json(categories);
}

export function getCatByIdHandler(req, res) {
    const id = parseInt(req.params.id);
    const category = getCatById(id);
    res.status(200).json(category);
}

export function createCatHandler(req, res) {
    const {name} = req.body;
    const newCat = createCat({name});
    res.status(201).json(newCat);
}

export function updateCatHandler(req, res) {
    const id = parseInt(req.params.id);
    const {name} = req.body;
    const updatedCat = updateCat(id, {name});
    res.status(200).json(updatedCat);
}

export function deleteCatHandler(req, res) {
    const id = parseInt(req.params.id);
    deleteCat(id);
    res.status(204).send();
}
