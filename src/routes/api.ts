import { Router } from 'express';

import * as ApiController from '../controllers/apiController';

const router = Router();

router.get('/', ApiController.ping);

export default router;