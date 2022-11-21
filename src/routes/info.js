import express from 'express';
import infoController from '../app/controllers/InfoController.js';

const router = express.Router();

router.get('/email', infoController.email);
router.get('/phone', infoController.phone);
router.get('/', infoController.index);

export default router;
