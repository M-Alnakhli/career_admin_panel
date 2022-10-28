import * as Yup from 'yup';
export const SignUpSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"), 
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password should be 6 chars minimum"),
  });