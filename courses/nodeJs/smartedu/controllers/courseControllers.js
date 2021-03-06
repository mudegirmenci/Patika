import Course from '../models/Course.js';
import Category from '../models/Category.js';
import User from '../models/Users.js';

//create new course
export const createCourse = async (req, res) => {
  try {
    const course = await Course.create({
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      user: req.session.userID,
    });
    req.flash('success', `${course.name} kursu oluşturma başarılı`);
    res.status(201).redirect('/courses');
  } catch (error) {
    req.flash('error', `Kurs oluşturma başarısız!!!`);
    res.status(400).redirect('/courses');
  }
};

//get courses
export const getCourses = async (req, res) => {
  try {
    const categorySlug = req.query.categories;
    const query = req.query.search;

    const category = await Category.findOne({ slug: categorySlug });

    let filter = {};

    if (categorySlug) {
      filter = { category: category._id };
    }

    if (query) {
      filter = { name: query };
    }

    if (!query && !categorySlug) {
      (filter.name = ''), (filter.category = null);
    }

    const courses = await Course.find({
      $or: [
        { name: { $regex: '.*' + filter.name + '.*', $options: 'i' } },
        { category: filter.category },
      ],
    })
      .sort('-createdAt')
      .populate('user')
      .populate('user');
    const categories = await Category.find();

    res.status(200).render('courses', {
      courses,
      categories,
      page_name: 'courses',
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
    const user = await User.findById(req.session.userID);
    const course = await Course.findOne({ slug: req.params.slug }).populate(
      'user'
    );
    const categories = await Category.find();

    res.status(200).render('course', {
      course,
      page_name: 'courses',
      user,
      categories,
    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      error,
    });
  }
};

export const enrollCourse = async (req, res) => {
  try {
    const user = await User.findById(req.session.userID);
    await user.courses.push({ _id: req.body.course_id });
    await user.save();

    res.redirect('/users/dashboard');
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      error,
    });
  }
};

export const releaseCourse = async (req, res) => {
  try {
    const user = await User.findById(req.session.userID);
    await user.courses.pull({ _id: req.body.course_id });
    await user.save();

    res.redirect('/users/dashboard');
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      error,
    });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findOneAndRemove({ slug: req.params.slug });
    req.flash('success', `${course.name} kursu silindi`);

    res.redirect('/users/dashboard');
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      error,
    });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug });
    course.name = req.body.name;
    course.description = req.body.description;
    course.category = req.body.category;
    course.save();
    res.redirect('/users/dashboard');
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      error,
    });
  }
};
