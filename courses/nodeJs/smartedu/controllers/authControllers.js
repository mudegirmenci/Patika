import bcrypt from 'bcrypt';
import User from '../models/Users.js';
import session from 'express-session';

export const createUser = async (req, res) => {
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

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body; //form ile gönderilen email ve password yakal

    const user =await  User.findOne({ email })
      //bu email sahibi kullanıcı varmı?
      if(user) {
        req.session.userID =user._id
        bcrypt.compare(password, user.password, (err, same) => {
          //varsa şifresi doğru mu?
          if (same) {
           
            res.status(200).redirect('/')
            
          }
        });
      }
    
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      error,
    });
  }
};
