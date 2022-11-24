import express from 'express';
import coursesController from '../app/controllers/CoursesController.js';

const router = express.Router();

router.get('/create-course', coursesController.create);
router.post('/create-success', coursesController.success);
router.get('/', coursesController.home);
router.get('/:slug', coursesController.index);

export default router;
