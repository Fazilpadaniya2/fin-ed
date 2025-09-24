import express from 'express';
import { post_user_profile } from '../controllers/user_profileController';


const app= express;
const router = app.Router({mergeParams: true});    


router.get('/', )
router.patch('/', post_user_profile ) //a patch req will be sent


export default router;