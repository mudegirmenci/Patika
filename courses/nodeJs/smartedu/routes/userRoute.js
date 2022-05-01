import express from 'express';
import * as authController from '../controllers/authControllers.js'
import autMiddleware from '../middlewares/authMiddleware.js'
const router = express.Router()

router.route('/signup').post(authController.createUser)
router.route('/login').post(authController.loginUser)
router.route('/logout').get(authController.logoutUser)
router.route('/dashboard').get(autMiddleware, authController.getDashBoardPage)

export default router
