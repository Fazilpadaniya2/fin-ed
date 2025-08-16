import express from 'express';

import { getActs } from '../controllers/actController.js';

//importing router from 
const router = express.Router({mergeParams: true});


router.get('/', getActs);


export default router;


