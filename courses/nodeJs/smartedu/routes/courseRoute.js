import express from 'express';
import * as courseController from '../controllers/courseControllers.js'

const router = express.Router()

router.route('/').post(courseController.createCourse) // http://localhost:3000/courses


export default router