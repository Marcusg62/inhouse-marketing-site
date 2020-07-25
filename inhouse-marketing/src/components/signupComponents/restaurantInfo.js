import React from "react"
import { TextField } from '@material-ui/core'
import {Button} from '@material-ui/core'


const RestaurantInfo = props =>{
  const { values, handleChange, next, errors, touched, handleBlur} = props
  const restaurantNameHasError = errors.restaurantName && touched.restaurantName
  const restaurantAddressHasError = errors.restaurantAddress && touched.restaurantAddress
  return(
      <>      
        <TextField style={{width: "100%"}}
          error = {restaurantNameHasError}
          label="Restaurant Name"
          helperText={restaurantNameHasError ? errors.restaurantName : null}
          variant="outlined"
          onBlur={handleBlur}
          defaultValue={values.restaurantName}
          onChange={handleChange}
          name="restaurantName"
        /><br />
        
        <TextField
        // TO DO: @yingqi google maps/ google places autocomplete
          error = {restaurantAddressHasError}
          label="Restaurant Address"
          helperText={restaurantAddressHasError ? errors.restaurantAddress : null}
          variant="outlined"
          onBlur={handleBlur}
          values={values.restaurantAddress}
          defaultValue={values.restaurantAddress}
          onChange={handleChange}
          name="restaurantAddress"
        /> <br />       
        <Button
          // disabled={(!touched.restaurantAddress || !touched.restaurantName) || (restaurantNameHasError || restaurantAddressHasError)}
          onClick={next} 
          variant="contained"
          color="primary"
        >Next
        </Button>
    </>
  )

}

export default RestaurantInfo;