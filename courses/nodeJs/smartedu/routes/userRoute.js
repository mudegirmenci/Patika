import express from 'express';
import * as authController from '../controllers/authControllers.js'

const router = express.Router()

router.route('/signup').post(authController.createUser)
router.route('/login').post(authController.loginUser)
router.route('/logout').get(authController.logoutUser)


export default router
