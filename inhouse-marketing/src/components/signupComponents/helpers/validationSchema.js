import * as Yup from "yup"

const SignupSchema = Yup.object().shape({
    restaurantName: Yup.string()
      .required('A restaurant name is required'),
    restaurantAddress: Yup.string()
      .required('A restaurant address is required'),
    name: Yup.string()
      .required('A name is required'),
    phone: Yup.string()
      .required('A phone is required')
      .matches(/^[0-9]{10}$/, 'Must be exactly 10 digits number')
  });

const createUserSchema =  Yup.object().shape({
  email: Yup.string()
    .required('A name is required')
    .email,
  password: Yup.string()
    .required('A phone is required')
    .min(6)
});


export default {SignupSchema, createUserSchema}