import express from 'express';
import coursesController from '../app/controllers/CoursesController.js';

const router = express.Router();

router.get('/:slug', coursesController.index);

export default router;
