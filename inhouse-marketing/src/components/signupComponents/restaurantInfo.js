import React, { useEffect } from "react"
import { TextField } from '@material-ui/core'
import {Button} from '@material-ui/core'


const RestaurantInfo = props =>{
  const { values, handleChange, next, errors} = props
  console.log(errors)
  return(
      <>
        
        <TextField
          label="restaurantName"
          variant="outlined"
          defaultValue={values.restaurantName}
          onChange={handleChange}
          name="restaurantName"
        /><br />
        <TextField
          label="Restaurant Address"
          variant="outlined"
          values={values.restaurantAddress}
          defaultValue={values.restaurantAddress}
          onChange={handleChange}
          name="restaurantAddress"
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