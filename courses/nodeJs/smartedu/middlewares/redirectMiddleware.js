//eğer bir kullacnıcı giriş yapmışsa ana sayfaya yönlendir.
export default (req, res, next) => {
  if (req.session.userID) {
    return res.redirect('/');
  }
  next();
};
