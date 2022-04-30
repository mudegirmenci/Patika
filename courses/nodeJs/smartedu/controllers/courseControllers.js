import Course from '../models/Course.js';
import Category from '../models/Category.js';

//create new course
export const createCourse = async (req, res) => {
 
  try {

    const course = await Course.create(req.body);

    res.status(201).json({
      status: 'success',
      course,
    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      error,
    });
  }
};

//get courses
export const getCourses = async (req, res) => {
 
  try {

    const categorySlug = req.query.categories;  //categories=programming şeklinde query ile gelen parametreyi yakala.
    const category = await Category.findOne( {slug:categorySlug})  //bu parametreye karşılık gelen kategoriyi bul
    let filter = {}
    if(categorySlug) {  //kategori var mı?
      filter = { category:category._id}
    }
    const courses = await Course.find(filter ) //seçilen kategoriye ait kursları getir,kategory boşsa bütün kursları getir.
    const categories = await Category.find() //kategorileri getir.

    res.status(200).render('courses',{
      courses,
      categories,
      page_name : 'courses'

    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      error,
    });
  }
};


//get course
export const getCourse = async (req, res) => {
 
  try {

    const course = await Course.findOne({slug:req.params.slug})

    res.status(200).render('course',{
      course,
      page_name : 'courses'

    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      error,
    });
  }
};
