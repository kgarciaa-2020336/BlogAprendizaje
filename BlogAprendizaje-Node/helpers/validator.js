import { body, param } from 'express-validator';
import { validateErrorWithoutImg } from './validate.error.js';

const validCourses = ['TECNOLOGÍA', 'TALLER', 'TICS'];

export const addCommentaryValidator = [
    body('author', 'Author is required').notEmpty().isLength({ max: 100 }),
    body('comment', 'Content is required').notEmpty().isLength({ max: 800 }),
    body('publication', 'publication is required').notEmpty().isMongoId().withMessage('Post must be a valid ID'),
    validateErrorWithoutImg
];

export const getCommentsByPostValidator = [
    param('publication', 'PublicationId is required').notEmpty().isMongoId().withMessage('PostId must be a valid ID'),
    validateErrorWithoutImg
];

export const addPublicationValidator = [
    body('title', 'Title is required').notEmpty().isLength({ max: 75 }),
    body('course', 'Category is required').notEmpty().isIn(validCourses).withMessage('Course must be one of the following: TECNOLOGÍA, TALLER, TICS'),
    body('description', 'Content is required').notEmpty(),
    body('author', 'Author is required').notEmpty().isLength({ max: 100 }),
    validateErrorWithoutImg
];

export const updatePublicationValidator = [
    body('title').optional().notEmpty().isLength({ max: 500 }),
    body('course', 'Category is required').notEmpty().isIn(validCourses).withMessage('Course must be one of the following: TECNOLOGÍA, TALLER, TICS'),
    body('description').optional().notEmpty(),
    body('author').optional().notEmpty().isLength({ max: 100 }),
    validateErrorWithoutImg
];

export const deletePublicationValidator = [
    param('id', 'Publication ID is required').notEmpty().isMongoId(),
    validateErrorWithoutImg
];

export const getCoursePublicationValidator = [
    param('course', 'Course is required').notEmpty(),
    validateErrorWithoutImg
];