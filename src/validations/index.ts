import * as Yup from 'yup';
export const SignInSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"), 
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password should be 6 chars minimum"),
  });


  export const SignUpSchema = Yup.object().shape({
    userName:Yup.string().required('userName is Required').min(2),
    email: Yup.string().email().required("Email is required"), 
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password should be 6 chars minimum"),
  });


  // export const  ApplicationFormSchema =Yup.object().shape({
  //     firstName:Yup.string().required('userName is Required').min(2),
  //     lastName:Yup.string().required('userName is Required').min(2),
  //     linkedinUrl:Yup.string().required('userName is Required').min(2).url('')
  //     cv:Yup.
  //     positionID:Yup.string().required('userName is Required').min(2).

  // })