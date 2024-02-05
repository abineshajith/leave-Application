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
});
const Updatepassword = Yup.object({
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
  name: Yup.string()
    .trim()
    .required('Name is required')
    .matches(/^[^\s].*$/, 'Name should not start with a space')
    .matches(/\S+$/, 'Name should not contain only spaces'),
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
  empid: Yup.string()
    .trim()
    .required('empid is required')
    .matches(/^[^\s].*$/, 'empid should not start with a space')
    .matches(/\S+$/, 'empid should not contain only spaces'),
});

  const profileValidationSchema = Yup.object({
    name: Yup.string()
    .trim()
    .required('Name is required')
    .matches(/^[^\s].*$/, 'Name should not start with a space')
    .matches(/\S+$/, 'Name should not contain only spaces'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    mobile: Yup.string()
      .matches(/^\d{10}$/, 'Mobile number must be 10 digits')
      .required('Mobile number is required'),
      empid: Yup.string()
      .trim()
      .required('empid is required')
      .matches(/^[^\s].*$/, 'empid should not start with a space')
      .matches(/\S+$/, 'empid should not contain only spaces'),
  });

  export { loginValidationSchema, registrationValidationSchema,forgotPassword,profileValidationSchema,Updatepassword};