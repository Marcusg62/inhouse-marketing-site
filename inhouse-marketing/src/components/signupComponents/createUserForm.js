import { Formik, Form} from "formik"
import React from 'react'
import { TextField, Button } from "@material-ui/core"
import { createUser } from "../../firebase/firebaseService"
import {createUserSchema} from './helpers/validationSchema'
import { makeStyles } from "@material-ui/styles"
import { createUserWithGoogle, createUserWithFacebook } from "../../firebase/firebaseService"

const initialValues = {
    email: "",
    password:""
}

const componentStyles = makeStyles(theme => ({
    form: {
      margin:"1%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
  }) 
  )


const createUserForm =({restaurantID,payload}) =>{
    const classes = componentStyles();
    console.log(restaurantID, payload)
    return (
    <>
        <Formik 
           initialValues={initialValues}
           validationSchema={createUserSchema}
        >
            {({values,handleChange, errors,touched, handleBlur,setFieldTouched}) =>{
                  const emailHasError = errors.email && touched.email
                  const passwordHasError = errors.password && touched.password
                  
                  const customSubmit = () => {
                    if (!touched.email || !touched.password){
                      // if user wants to proceed without touching any field, the form can't be submited
                      setFieldTouched("password")
                      setFieldTouched("email")
                    }else if(!passwordHasError && !emailHasError){
                        // if there are no errors then invoke next() to next step
                        console.log("values:",values, "restaurantID:", restaurantID)         
                        createUser(values, restaurantID, payload)
                          .then((data) => console.log(data))
                          .catch( err => console.log(err))
                    } 
                  }

                return(    
                <Form className={classes.form}>
                    <TextField
                        error = {emailHasError}
                        label="Email"
                        helperText={emailHasError ? errors.email : null}
                        onBlur={handleBlur}
                        variant="outlined"
                        onChange={handleChange}
                        name="email"
                        /><br />
                    <TextField
                        error = {passwordHasError}
                        type="password"
                        label="Password"
                        helperText={passwordHasError ? errors.password : null}
                        onBlur={handleBlur}
                        variant="outlined"
                        onChange={handleChange}
                        name="password"
                        /><br />                    
                    <Button 
                        onClick={customSubmit} 
                        variant="contained"
                        color="primary"
                    >Submit
                    </Button>                           
                </Form>
                )}}
        </Formik>
        <Button onClick={createUserWithGoogle} variant="contained" >Sign in with Google</Button>
        <Button onClick={createUserWithFacebook} variant="contained">Sign in with Facebook</Button>        
    </>
    )
}

export default createUserForm