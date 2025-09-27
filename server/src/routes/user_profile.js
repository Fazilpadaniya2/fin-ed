import express from 'express';
import { update_user_profile, get_user_profile } from '../controllers/user_profileController.js';

const app= express;
const 
router = app.Router({mergeParams: true});    



router.patch('/', update_user_profile ) //a patch req will be sent
router.get('/', get_user_profile)

export default router;  