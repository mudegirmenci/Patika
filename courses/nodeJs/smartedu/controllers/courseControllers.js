import Course from '../models/Course.js';


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

    const courses = await Course.find( )

    res.status(200).render('courses',{
      courses,
      page_name : 'courses'

    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      error,
    });
  }
};
