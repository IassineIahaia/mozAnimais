import {Router} from 'express';
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

const router = Router();

router.get('/', PageController.home);
router.get('/cao', PageController.cao);
router.get('/gato', PageController.gato);
router.get('/peixe', PageController.peixe);
router.get('/search', SearchController.search);

export default router;