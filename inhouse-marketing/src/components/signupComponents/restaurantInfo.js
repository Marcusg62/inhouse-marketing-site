import React from "react"
import { TextField } from '@material-ui/core'
import {Button} from '@material-ui/core'

const RestaurantInfo = props =>{
  const { values, handleChange, next} = props
  return(
      <>
        <TextField
          label="Restaurant Name"
          variant="filled"
          values={values.restaurantName}
          onChange={handleChange}
        /><br />
        <TextField
          label="Restaurant Address"
          variant="filled"
          values={values.restaurantAddress}
          onChange={handleChange}
        /> <br />       
        <Button 
          onClick={next} 
          variant="contained"
          color="primary"
        >Next
        </Button>
    </>
  )

}

export default RestaurantInfo;