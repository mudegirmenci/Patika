import bcrypt from 'bcrypt';
import {validationResult } from 'express-validator';

import User from '../models/Users.js';
import Category from '../models/Category.js'
import session from 'express-session';
import Course from '../models/Course.js';

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).redirect('/login')

  } catch (error) {
    const errors = validationResult(req)
    console.log(errors)

    for(let i=0;i<errors.array().length;i++) {
      req.flash("error",`${errors.array()[i].msg}`) 
    }
    res.status(400).redirect('/register')

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
            if(same) {
              req.session.userID = user._id
              res.status(200).redirect('/users/dashboard')
            } else {
              req.flash("error",`Your password is incorrect`) 
              res.status(400).redirect('/login')

            }
           
                     
        });
      } else {
        req.flash("error",`User is not exist`) 
        res.status(400).redirect('/login')

      }
    
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      error,
    });
  }
};

export const logoutUser =  (req, res) => {
    req.session.destroy( () => {
      res.redirect('/')
    })
}

export const getDashBoardPage = async (req, res) => {
  const user = await User.findOne(  {_id:req.session.userID}).populate('courses')
  const categories = await Category.find()
  const courses =await Course.find( {user:req.session.userID})  // Kullanıcı taraından oluşturulan kurslae
  const users = await User.find();
  res.status(200).render('dashboard', {
    page_name: 'dashboard',
    user,
    categories,
    courses,
    users
  });
};


export const deleteUser = async (req, res) => {
  try {    

    await User.findByIdAndRemove(req.params.id)
    await Course.deleteMany({user:req.params.id})

    res.status(200).redirect('/users/dashboard');

  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};