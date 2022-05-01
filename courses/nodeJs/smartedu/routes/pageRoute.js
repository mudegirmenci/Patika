import express from 'express';
import * as pageController from '../controllers/pageControllers.js'
import redirectMiddleware from '../middlewares/redirectMiddleware.js';


const router = express.Router()

router.route('/').get(pageController.getIndexPage)
router.route('/about').get(pageController.getAboutPage)
router.route('/contact').get(pageController.getContactPage)
router.route('/course-single').get(pageController.getCourseSinglePage)
//router.route('/courses').get(pageController.getCoursesPage)
//router.route('/dashboard').get(pageController.getDashBoardPage)
router.route('/login').get(redirectMiddleware,pageController.getLoginPage)
router.route('/register').get(redirectMiddleware,pageController.getRegisterPage)

export default router