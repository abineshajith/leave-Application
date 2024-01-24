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

  export const sendEmail= async(name,token,email)=>{

    const info = await transporter.sendMail({
        from: process.env.EMAIL_USER, // sender address
        to:email , // list of receivers
        subject: "Forgot Password", // Subject line
        html: `
        Hey,${name},
        your forget password link is below click the link <br/>
        <a href="http://localhost:3000/update-password/${token}">Click</a>
        
        `, // html body
      });
    return info
  }