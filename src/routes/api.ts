import {Router} from 'express';
import * as apiController from '../controllers/apiController';

const router = Router();

router.get('/ping', apiController.ping);
router.get('/random', apiController.random);
router.get('/nome/:nome', apiController.nome);
router.post('/frases', apiController.createPhrase);
router.get('/frases', apiController.listPhrases);
router.get('/frase/:id', apiController.getPhrase);

export default router;