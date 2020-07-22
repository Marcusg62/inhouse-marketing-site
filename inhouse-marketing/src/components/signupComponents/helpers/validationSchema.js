import * as Yup from "yup"

export const SignupSchema = Yup.object().shape({
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

export const createUserSchema =  Yup.object().shape({
    email: Yup.string()
      .required('A name is required')
      .email("It is not a valid email format"),
    password: Yup.string()
      .required('An password is required')
      .min(6, "Your password has to be more than 6 digits.")
  });

