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
          defaultValue={values.restaurantName}
          onChange={handleChange}
          name="restaurantName"
        /><br />
        <TextField
          label="Restaurant Address"
          variant="filled"
          values={values.restaurantAddress}
          defaultValue={values.restaurantAddress}
          onChange={handleChange}
          name="restaurantAddress"
        /> <br />       
        <button
          onClick={next} 
          variant="contained"
          color="primary"
        >Next
        </button>
    </>
  )

}

export default RestaurantInfo;