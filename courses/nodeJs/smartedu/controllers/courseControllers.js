import Course from '../models/Course.js';

export const createCourse = async (req, res) => {
  const course = await Course.create(req.body);

  try {
    res.status(201).json({
      status: 'success',
      course,
    });
  } catch {
    res.status(404).json({
      status: 'failed',
      error,
    });
  }
};
