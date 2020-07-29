import React, { useState } from "react";
import { Formik, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import RestaurantInfo from "../components/signupComponents/restaurantInfo";
import UserInfo from "../components/signupComponents/userInfo";
import AfterSubmit from "../components/signupComponents/afterSubmit";
import Layout from "../components/layout";
import { SignupSchema } from '../components/signupComponents/helpers/validationSchema'
import { submitOnBoardingForm } from "../firebase/firebaseService";
import renderStepper from "../components/signupComponents/stepper"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    input: "width: 100%"
  }
}));


const renderStep = (step, values, errors, handleBlur, touched, handleChange, handleSubmit, next, back, signupSuccess, setFieldValue,setFieldTouched) => {
  switch (step) {
    case 1:
      return (
        <RestaurantInfo
          values={values}
          handleBlur={handleBlur}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          setFieldValue = {setFieldValue}
          setFieldTouched={setFieldTouched}
          next={next}
        />);
    case 2:
      return (
        <UserInfo
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          back={back}
          handleSubmit={handleSubmit}
          handleBlur={handleBlur}
        />);
    default:
      return <RestaurantInfo errors={errors} touched={touched} />;
  }
};

const MultiStep = () => {
  const [step, setStep] = useState(1);
  const [signupSuccess, setSignupSuccess] = useState(false)
  const classes = useStyles();
  const formData = {
    restaurantName: "",
    restaurantAddress: "",
    name: "",
    phone: "",
  }

  const next = () => {
    // update state.step by adding to previous state
    // TO DO @yingqi 

    // 1


    // 2
    // 3
    setStep(s => s + 1)
  }

  // process to previous step
  const back = () => {
    // update state.step by minus 1 from previous state
    setStep(s => s - 1)
  }

  const handleSubmit = payload => {
    // delete the step key in the payload,it doesn't have to be saved
    delete payload.step
    // connect to the firebase to create a document 
    submitOnBoardingForm(payload)
      .then(() => setSignupSuccess(true))
      .then(() => next())
      .catch(err => alert(err.message))

      // navigate to /dashboard and display 'You submit succesfully! Let's create a user account here.' in dashboard based on query string
  }

  const myStepLable = [
    'Restaurant information',
    'User information'];

  return (
    <Layout>
      <Card>
        <CardContent>
          {/* because my step starting from 1, so activeStep would be my step-1 */}
          {renderStepper(step, myStepLable)}
          <Formik
            initialValues={formData}
            onSubmit={handleSubmit}
            validationSchema={SignupSchema}
          >
            {({ values, errors, handleBlur, touched, handleChange, setFieldValue, setFieldTouched}) => (
              <Form className={classes.form}>
                {renderStep(step, values, errors, handleBlur, touched, handleChange, handleSubmit, next, back, signupSuccess, setFieldValue,setFieldTouched)}
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default MultiStep