import Category from '../models/Category.js';

//create new course
export const createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);

    res.status(201).redirect('/users/dashboard');
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      error,
    });
  }
};



export const  deleteCategory = async (req, res) => {
  try {    

    await Category.findByIdAndRemove(req.params.id)
    res.status(200).redirect('/users/dashboard');

  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};