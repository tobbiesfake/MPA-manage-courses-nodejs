import express from 'express';
import coursesController from '../app/controllers/CoursesController.js';

const router = express.Router();

router.get('/create', coursesController.create);
router.post('/save', coursesController.save);
router.delete('/:id', coursesController.delete);
router.get('/edit/:id', coursesController.edit);
router.put('/:id', coursesController.update);
router.get('/manage', coursesController.manage);
router.get('/', coursesController.courses);
router.get('/:slug', coursesController.index);

export default router;
