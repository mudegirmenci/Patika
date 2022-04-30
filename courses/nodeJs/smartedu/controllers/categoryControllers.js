import Category from '../models/Category.js';

//create new course
export const createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);

    res.status(201).json({
      status: 'success',
      category,
    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      error,
    });
  }
};
