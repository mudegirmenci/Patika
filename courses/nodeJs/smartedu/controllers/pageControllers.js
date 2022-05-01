

export const getIndexPage = (req, res) => {
  console.log(req.session.userID)
  res.status(200).render('index', {
    page_name: 'index',
  });
};
export const getAboutPage = (req, res) => {
  res.status(200).render('about', {
    page_name: 'about',
  });
};
export const getContactPage = (req, res) => {
  res.status(200).render('contact', {
    page_name: 'contact',
  });
};

export const getCourseSinglePage = (req, res) => {
  res.status(200).render('course-single');
};

export const getCoursesPage = (req, res) => {
  res.status(200).render('courses', {
    page_name: 'courses',
  });
};

export const getDashBoardPage = (req, res) => {
  res.status(200).render('dashboard', {
    page_name: 'dashboard',
  });
};

export const getLoginPage = (req, res) => {
    res.status(200).render('login', {
    page_name: 'login',
  });
};

export const getRegisterPage = (req, res) => {
  res.status(200).render('register', {
    page_name: 'register',
  });
};


