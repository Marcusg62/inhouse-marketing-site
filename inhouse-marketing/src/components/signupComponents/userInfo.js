import React from "react"
import { TextField, ButtonGroup } from '@material-ui/core'
import {Button} from '@material-ui/core'

const UserInfo = props =>{
  const { values, handleChange, handleSubmit, back,errors, touched, handleBlur} = props
  const nameHasError = errors.name && touched.name
  const phoneHasError = errors.phone && touched.phone
  return(
      <>
       <TextField
          error = {nameHasError}
          label={nameHasError ? "Error" : "name"}
          helperText={nameHasError ? errors.name : null}
          onBlur={handleBlur}
          variant="outlined"
          defaultValue={values.name}
          onChange={handleChange}
          name="name"
        /><br />
        <TextField
          error = {phoneHasError}
          label={phoneHasError ? "Error" : "phone"}
          helperText={phoneHasError ? errors.phone : null}
          onBlur={handleBlur}
          variant="outlined"
          values={values.phone}
          defaultValue={values.phone}
          onChange={handleChange}
          name="phone"
        /> <br />

        <ButtonGroup variant="contained" >
          <Button  
            onClick={back} 
            variant="contained"
            color="primary"
          >Back
          </Button>

          <Button 
            disabled={(!touched.name || !touched.phone) || (phoneHasError || nameHasError)}            
            onClick={handleSubmit} 
            variant="contained"
            color="primary"
          >Submit
          </Button>
        </ButtonGroup>         
    </>
  )
}
export default UserInfo;