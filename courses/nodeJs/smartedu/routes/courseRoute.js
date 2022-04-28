import express from 'express';
import * as courseController from '../controllers/courseControllers.js'

const router = express.Router()

router.route('/').post(courseController.createCourse) // http://localhost:3000/courses
router.route('/').get(courseController.getCourses) 
router.route('/:slug').get(courseController.getCourse) 

export default router