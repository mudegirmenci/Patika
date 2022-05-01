import bcrypt from 'bcrypt';
import User from '../models/Users.js';

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
        bcrypt.compare(password, user.password, (err, same) => {
          //varsa şifresi doğru mu?
          if (same) {
            //USER SESSION
          return  res.status(200).json('YOU ARE LOG IN'); //şifre doğruysa giriş yaptı
            
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
