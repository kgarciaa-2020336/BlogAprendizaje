import { Router } from 'express';
import {
    addPublication,
    updatePublication,
    deletePublication,
    listPublication,
    getCoursePublication
} from './publication.controller.js';
import {
    addPublicationValidator,
    updatePublicationValidator,
    deletePublicationValidator,
    getCoursePublicationValidator
} from '../../helpers/validator.js';

const api = Router();

api.post('/addPublication', addPublicationValidator, addPublication);
api.put('/updatePublication/:id', updatePublicationValidator, updatePublication);
api.delete('/deletePublication/:id', deletePublicationValidator, deletePublication);
api.get('/getCoursePublication/:course', getCoursePublicationValidator, getCoursePublication);
api.get('/listPublication/', listPublication);

export default api;