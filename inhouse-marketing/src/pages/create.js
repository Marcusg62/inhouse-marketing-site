import { Formik, Form, ErrorMessage } from "formik"
import React from 'react'
import { TextField, Button } from "@material-ui/core"
import { createUser } from "../firebase/firebaseService"


const initialValues = {
    email: "",
    password:""
}


const createUserWithEmailandPassword = () =>{
    return (
        <Formik 
           initialValues={initialValues}
           onSubmit={createUser}
        >
            {({values,handleChange, handleSubmit, errors,touched,handleBlur }) =>{
                return(    
                <Form >
                    <TextField
                        // error = {nameHasError}
                        label="Email"
                        // helperText={nameHasError ? errors.name : null}
                        // onBlur={handleBlur}
                        variant="outlined"
                        // defaultValue={values.name}
                        onChange={handleChange}
                        name="email"
                        /><br />
                    <TextField
                        // error = {nameHasError}
                        type="password"
                        label="Password"
                        // helperText={nameHasError ? errors.name : null}
                        // onBlur={handleBlur}
                        variant="outlined"
                        // defaultValue={values.name}
                        onChange={handleChange}
                        name="password"
                        /><br />                    
                    <Button 
                        // disabled={(!touched.name || !touched.phone) || (phoneHasError || nameHasError)}            
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

export default createUserWithEmailandPassword