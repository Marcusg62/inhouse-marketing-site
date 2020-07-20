import React, { useState } from "react";
import { Formik, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import RestaurantInfo from "../components/signupComponents/restaurantInfo";
import UserInfo from "../components/signupComponents/userInfo";
import AfterSubmit from "../components/signupComponents/afterSubmit";
import Layout from "../components/layout";
import {Stepper, Step, StepLabel} from '@material-ui/core'
import SignupSchema from '../components/signupComponents/helpers/validationSchema'
import { submitOnBoardingForm } from "../firebase/firebaseService";

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const renderStep = (step, values, errors, handleBlur, touched, handleChange, handleSubmit, next, back, signupSuccess) => {
  switch (step) {
    case 1:
        return (
          <RestaurantInfo 
            values={values}
            handleBlur={handleBlur}
            errors={errors} 
            touched={touched}
            handleChange={handleChange}
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
    case 3:
      return <AfterSubmit signupSuccess={signupSuccess} />;
    default:
      return <RestaurantInfo errors={errors} touched={touched} />;
  }
};

const MultiStep = () => {
  const [step, setStep] = useState(1);
  const [signupSuccess, setSignupSuccess] = useState(false)
  const classes = useStyles();
  const formData = {
    step: 1,
    restaurantName: "",
    restaurantAddress: "",
    name: "",
    phone: "",
  }

  const next = () => {
    // update state.step by adding to previous state
    setStep(s=>s+1)
  }
  
  // process to previous step
  const back = () => {
    // update state.step by minus 1 from previous state
    setStep(s=>s-1)
  }

  const handleSubmit = payload => {
    // delete the step key in the payload,it doesn't have to be saved
    delete payload.step
    // connect to the firebase to create a document 
    submitOnBoardingForm(payload)
      .then(() => setSignupSuccess(true))
      .then(() => next())
      .catch(err => alert(err.message))
  }

  const steps = [
      'Restaurant information', 
      'User information', 
      'Done!'];


  return (
    <Layout>
      {/* because my step starting from 1, so activeStep would be my step-1 */}
      <Stepper activeStep={step-1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>     
      <Formik
        initialValues={formData}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
      >
        {({ values, errors, handleBlur, touched, handleChange}) => (
          <Form className={classes.form}>
            {renderStep(step, values, errors, handleBlur, touched, handleChange, handleSubmit, next, back, signupSuccess)}
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default MultiStep