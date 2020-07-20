import { Formik, Form} from "formik"
import React from 'react'
import { TextField, Button } from "@material-ui/core"
import { createUser } from "../../firebase/firebaseService"
import {createUserSchema} from './helpers/validationSchema'
import { makeStyles } from "@material-ui/styles"

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

const createUserForm = () =>{
    const classes = componentStyles();
    return (
        <Formik 
           initialValues={initialValues}
           onSubmit={createUser}
           validationSchema={createUserSchema}
        >
            {({values,handleChange, handleSubmit, errors,touched,handleBlur }) =>{
                  const emailHasError = errors.email && touched.email
                  const passwordHasError = errors.password && touched.password
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
                        disabled={(!touched.email || !touched.password) || (passwordHasError || emailHasError)}            
                        onClick={()=>handleSubmit(values)} 
                        variant="contained"
                        color="primary"
                    >Submit
                    </Button>                           
                </Form>
                )}}

        </Formik>
    )
}

export default createUserForm