import {Router} from 'express';
import {addComment, getCommentsByPost} from './comment.controller.js';
import { addCommentaryValidator, getCommentsByPostValidator } from '../../helpers/validator.js';

const api = Router();

api.post('/addComment', addCommentaryValidator, addComment);
api.get('/getComment/:publicationId' , getCommentsByPost);

export default api;