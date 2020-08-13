import React, { useState } from "react";
import { Formik, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import RestaurantInfo from "../components/signupComponents/restaurantInfo";
import UserInfo from "../components/signupComponents/userInfo";
import Layout from "../components/layout";
import { SignupSchema } from '../components/signupComponents/helpers/validationSchema'
import { submitOnBoardingForm } from "../firebase/firebaseService";
import renderStepper from "../components/signupComponents/stepper"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { navigate } from "gatsby";
import DashboardComponent from "../components/dashboard/dashboardComponent"
import { NextButton } from "../components/signupComponents/signUpButtons";


const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    input: "width: 100%"
  }
}));


const renderStep = (step, values, errors, handleBlur, touched, handleChange, handleSubmit, next, back, setFieldValue,setFieldTouched,restaurantID) => {
  switch (step) {
    case 1:
        return (
         <>
          <DashboardComponent 
            formSubmission = {values}
            restaurantID = {restaurantID}
          />
          <NextButton handleClick = {next} buttonStyle={{margin: "1%"}}/>
         </>
        )

    case 2:
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

    case 3:
      return (
        <UserInfo
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          back={back}
          handleSubmit={handleSubmit}
          setFieldTouched={setFieldTouched}
          handleBlur={handleBlur}
        />);
    default:
      return <RestaurantInfo errors={errors} touched={touched} />;
  }
  
};

const MultiStep = () => {
  const [step, setStep] = useState(1);
  const [restaurantID,setRestaurantID] = useState(null)
  console.log("restaurant id is: ", restaurantID)
  // set restaurant so that later on we can connect restaurant with the user
  const classes = useStyles();
  const formData = {
    restaurantName: "",
    restaurantAddress: "",
    name: "",
    phone: "",
  }

  //process to next step by adding to step state
  const next = () => {
    setStep(s => s + 1)
  }

  // process to previous step
  const back = () => {
    // update state.step by minus 1 from previous state
    setStep(s => s - 1)
  } 

  const handleSubmit = payload => {
    // connect to the firebase to create a document 
    submitOnBoardingForm(payload)
      .then((data) => setRestaurantID(data.id))
      .then(()=>navigate)
      .catch(err => alert(err.message))

      // navigate to /dashboard and display 'You submit succesfully! Let's create a user account here.' in dashboard based on query string
  }

  const myStepLable = [
    'Create your account',
    'Restaurant information',
    'User information'
  ];

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
                {renderStep(step, values, errors, handleBlur, touched, handleChange, handleSubmit, next, back,setFieldValue,setFieldTouched, restaurantID)}
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default MultiStep