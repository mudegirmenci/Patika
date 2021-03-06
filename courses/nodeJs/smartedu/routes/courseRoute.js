import express from 'express';
import * as courseController from '../controllers/courseControllers.js'
import roleMiddleware from '../middlewares/roleMiddleware.js';

const router = express.Router()

router.route('/').post(roleMiddleware(["teacher","admin"]), courseController.createCourse) // http://localhost:3000/courses
router.route('/').get(courseController.getCourses) 
router.route('/:slug').get(courseController.getCourse) 
router.route('/enroll').post(courseController.enrollCourse) 
router.route('/release').post(courseController.releaseCourse) 
router.route('/:slug').delete(courseController.deleteCourse) 
router.route('/:slug').put(courseController.updateCourse) 

export default router