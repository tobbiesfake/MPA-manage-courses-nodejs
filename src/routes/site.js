import express from 'express';
import SiteController from '../app/controllers/SiteController.js';
const router = express.Router();

router.get('/search', SiteController.search);
router.get('/', SiteController.home);
router.get('/:slug', SiteController.notFound);

export default router;
