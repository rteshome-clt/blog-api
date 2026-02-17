import {param} from 'express-validator';
import { handleValidationErrors } from './handleValidationErrors.js';

export const validateId = [
    param('id')
    .trim()
    .escape()
    .isInt({min: 1})
    .withMessage('ID must be a positive integer'),

handleValidationErrors,
];