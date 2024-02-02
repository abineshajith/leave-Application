import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port:process.env.EMAIL_PORT,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  export const sendEmail = async (name, token, email) => {
    try {
      const info = await transporter.sendMail({
        from: process.env.EMAIL_USER, // sender address
        to: email, // list of receivers
        subject: "Forgot Password", // Subject line
        html: `
          Hey ${name},
          your forgot password link is below. Click the link to reset your password: <br/>
          <a href="http://localhost:3000/update-password?token=${token}">Reset Password</a>
        `, // html body
      });
  
      console.log("Email sent:");
      return info;
    } catch (error) {
      console.error("Error sending email:", error);
      throw error;
    }
  };