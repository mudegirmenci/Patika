import express from 'express';
import * as authController from '../controllers/authControllers.js'

const router = express.Router()

router.route('/signup').post(authController.createUser)
export default router