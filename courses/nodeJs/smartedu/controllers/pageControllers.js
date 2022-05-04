import nodemailer from "nodemailer"


export const getIndexPage = (req, res) => {
  console.log(req.session.userID);
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

export const sendEmail = async (req, res) => {

  try {
    const outputMessage = `
    <h1>Message Details</h1>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h1>Message: ${req.body.message}</h1>
    <p></p>

    `

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "mudegirmenci", // generated ethereal user
          pass: "uoauufcbuugkoeej", // generated ethereal password
        },
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Smart Edu 👻" <freedom.and.tear@gmail.com>', // sender address
        to: "freedom.and.tear@gmail.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        html: outputMessage
      });
    
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      req.flash("success","We received your message succesfuly")

      res.status(200).redirect('contact')
    } catch(error) {

      //req.flash("error",`Bir hata oldu! ${error}`)
      req.flash("error","Bir hata oldu!")

      res.status(200).redirect('contact')

    }
};
