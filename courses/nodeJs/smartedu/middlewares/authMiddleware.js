import User from '../models/Users.js';

export default async (req, res, next) => {
   await User.findById(req.session.UserID, (err, user) => {
   if (!err || user) {
       next()
   } else {
       throw err
   }
  
 }).clone().catch(function(err){ console.log(err)});
};
