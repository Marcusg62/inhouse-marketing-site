import React from "react"
import { TextField } from '@material-ui/core'
import {Button} from '@material-ui/core'


const RestaurantInfo = props =>{
  const { values, handleChange, next, errors, touched, handleBlur} = props
  console.log(errors)
  const restaurantNameHasError = errors.restaurantName && touched.restaurantName
  const restaurantAddressHasError = errors.restaurantAddress && touched.restaurantAddress
  return(
      <>      
        <TextField
          error = {restaurantNameHasError}
          label={restaurantNameHasError ? "Error" : "RestaurantName"}
          helperText={restaurantNameHasError ? errors.restaurantName : null}
          variant="outlined"
          onBlur={handleBlur}
          defaultValue={values.restaurantName}
          onChange={handleChange}
          name="restaurantName"
        /><br />
        <TextField
          error = {restaurantAddressHasError}
          label={restaurantAddressHasError ? "Error" : "RestaurantAddress"}
          helperText={restaurantAddressHasError ? errors.restaurantAddress : null}
          variant="outlined"
          onBlur={handleBlur}
          values={values.restaurantAddress}
          defaultValue={values.restaurantAddress}
          onChange={handleChange}
          name="restaurantAddress"
        /> <br />       
        <Button
          disabled={(!touched.restaurantAddress || !touched.restaurantName) || (restaurantNameHasError || restaurantAddressHasError)}
          onClick={next} 
          variant="contained"
          color="primary"
        >Next
        </Button>
    </>
  )

}

export default RestaurantInfo;