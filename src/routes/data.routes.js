import exppress from 'express';

import dataController from '../controllers/data.controller.js';

const router = exppress.Router();


router.get('/get', (dataController.getData));





export default router;
