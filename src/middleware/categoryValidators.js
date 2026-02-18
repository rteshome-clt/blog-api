import { param, body, oneOf, query } from 'express-validator';
import { handleValidationErrors } from './handleValidationErrors.js';
import { getByName } from '../repositories/categoryRepo.js';

export const validateCategoryId = [
    param('id')
    .trim()
    .escape()
    .isInt({min: 1})
    .withMessage('ID must be a positive integer'),

handleValidationErrors,
];

export const validateCreateCategory = [
    body('name')
        .exists({values: 'falsy' })
        .withMessage('Name is required')
        .bail()
        .trim()
        .isString()
        .withMessage('Name must be a string')
        .bail()
        .isLength({min: 3})
        .withMessage('Name must be at least 3 characters.')
        .bail()
        .custom((value) => {
            if (getByName(value)) {
                throw new Error(`Category name "${value}" already exists`);
            }
            return true;
        }),

    handleValidationErrors,
];

export const validateUpdateCategory = [
    body('name')
        .optional()
        .trim()
        .isString()
        .withMessage('Name must be a string')
        .bail()
        .isLength({min: 3})
        .withMessage('Name must be at least 3 characters.')
        .bail()
        .custom((value, {req}) => {
            const existing = getByName(value);
            if (existing && existing.id!==parseInt(req.params.id)) {
                throw new Error(`Category name "${value}" already exists`);
            }
            return true;
        }),

    handleValidationErrors,
];

