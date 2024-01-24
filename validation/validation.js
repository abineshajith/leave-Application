import * as Yup from 'yup';

const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/,
      "Password must contain at least 6 characters, including at least one letter and one number"
    )
    .required("Password is required"),
});

const forgotPassword = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/,
      "Password must contain at least 6 characters, including at least one letter and one number"
    )
    .required("Password is required"),
  Cpassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords Should matched')
    .required("Password confirmation is required"),
});


const registrationValidationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/,
        'Password must contain at least 6 characters, including at least one letter and one number'
      )
      .required('Password is required'),
    mobile: Yup.string()
      .matches(/^\d{10}$/, 'Mobile number must be 10 digits')
      .required('Mobile number is required'),
  });

  export { loginValidationSchema, registrationValidationSchema,forgotPassword};