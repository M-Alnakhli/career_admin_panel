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
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


  export const  ApplicationFormSchema =Yup.object().shape({
      firstName:Yup.string().required('userName is Required').min(2),
      lastName:Yup.string().required('userName is Required').min(2),
      email: Yup.string().email().required("Email is required"), 
      positionID:Yup.string().required().min(2),
      mobile:Yup.string().required('mobile is Required').matches(phoneRegExp,'not valid mobile'),
      nationality:Yup.string().required('Nationality  is Required'),
      gender:Yup.string().required('Gender  is Required'),
      date:Yup.date().required('Date  is Required'),
      qualifications:Yup.array().of(Yup.object().shape({
        institution:Yup.string().required('Instituation  is Required'),
        country:Yup.string().required('country  is Required'),
        degree:Yup.string().required('degree  is Required'),
        mager:Yup.string().required('mager  is Required'),
      }))

      

  })



  