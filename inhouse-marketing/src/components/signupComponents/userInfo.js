import React from "react"
import { TextField } from '@material-ui/core'
import {Button} from '@material-ui/core'

const UserInfo = props =>{
  const { values, handleChange, handleSubmit, back} = props
  return(
      <>
       <TextField
          label="name"
          variant="filled"
          defaultValue={values.name}
          onChange={handleChange}
          name="name"
        /><br />
        <TextField
          label="Phone"
          variant="filled"
          values={values.phone}
          defaultValue={values.phone}
          onChange={handleChange}
          name="phone"
        /> <br />       
        <button 
          onClick={back} 
          variant="contained"
          color="primary"
        >Back
        </button>

        <Button 
          onClick={handleSubmit} 
          variant="contained"
          color="primary"
        >Submit
        </Button>         
    </>
  )
}
export default UserInfo;