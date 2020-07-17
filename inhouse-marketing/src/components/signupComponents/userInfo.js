import React from "react"
import { TextField, ButtonGroup } from '@material-ui/core'
import {Button} from '@material-ui/core'

const UserInfo = props =>{
  const { values, handleChange, handleSubmit, back} = props
  return(
      <>
       <TextField
          label="Name"
          variant="outlined"
          defaultValue={values.name}
          onChange={handleChange}
          name="name"
        /><br />
        <TextField
          label="Phone"
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