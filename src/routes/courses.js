import express from 'express';
import coursesController from '../app/controllers/CoursesController.js';

const router = express.Router();

router.get('/create', coursesController.create);
router.post('/save', coursesController.save);
router.get('/edit/:id', coursesController.edit);
router.get('/deleted', coursesController.deleted);
router.get('/restore/:id', coursesController.restore);
router.post('/multi-restore', coursesController.mutipleRestore);
router.delete('/force-delete/:id', coursesController.forceDelete);
router.delete('/multi-force-delete', coursesController.multipleforceDelete);
router.get('/manage', coursesController.manage);
router.delete('/multi-course', coursesController.mutipleDelete);
router.get('/', coursesController.courses);
router.delete('/:id', coursesController.delete);
router.put('/:id', coursesController.update);
router.get('/:slug', coursesController.index);

export default router;
