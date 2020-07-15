import React, { useState } from "react";
import { Formik, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import RestaurantInfo from "../components/signupComponents/restaurantInfo";
import UserInfo from "../components/signupComponents/userInfo";
import AfterSubmit from "../components/signupComponents/afterSubmit";
import Layout from "../components/layout";

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const renderStep = (step, values, errors, touched, handleChange, handleSubmit, next, back, signupSuccess) => {
  switch (step) {
    case 1:
        return (
            <RestaurantInfo 
            values={values}
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
    phone:"",
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

  const handleSubmit = (values) => {
      setSignupSuccess(true)
      next()
      console.log(values)
  }

  const validate = values => {
    const errors = {};
    if (!values.restaurantName) {
      errors.restaurantName = "Required";
    }

    if (!values.restaurantAddress) {
      errors.restaurantAddress = "Required";
    }

    return errors;
  };
  return (
    <Layout>
      <Formik
        enableReinitialize
        initialValues={{ ...formData }}
        onSubmit={handleSubmit}
        validate={validate}
      >
        {({ values, errors, touched, handleChange }) => (
          <Form className={classes.form}>
            {renderStep(step, values, errors, touched, handleChange, handleSubmit, next, back, signupSuccess)}
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default MultiStep