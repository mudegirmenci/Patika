import express from 'express';
import * as categoryController from '../controllers/categoryControllers.js'

const router = express.Router()

router.route('/').post(categoryController.createCategory) // http://localhost:3000/categories
router.route('/:id').delete(categoryController.deleteCategory) // http://localhost:3000/categories


export default router