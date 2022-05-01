import User from '../models/Users.js';

export const createUser= async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(200).json({
      status: 'success',
      user,
    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      error,
    });
  }
};
