import React from "react"
import { TextField} from '@material-ui/core'
import {Button} from '@material-ui/core'
import AutoCompleteAddress from './AutoCompleteAddress'




const RestaurantInfo = props =>{
  const { values, handleChange, next, errors, touched, handleBlur,setFieldValue} = props
  const restaurantNameHasError = errors.restaurantName && touched.restaurantName
  const restaurantAddressHasError = errors.restaurantAddress && touched.restaurantAddress
  
  const handleAutoComplete = async myAddress =>{
    setFieldValue('restaurantAddress', myAddress)
  }

  return(
      <>      
        <TextField style={{width: "60%"}}
          value = {values.restaurantName}
          error = {restaurantNameHasError}
          label="Restaurant Name"
          helperText={restaurantNameHasError ? errors.restaurantName : null}
          variant="outlined"
          onBlur={handleBlur}
          defaultValue={values.restaurantName}
          onChange={handleChange}
          name="restaurantName"
        /><br />

        <AutoCompleteAddress 
          values={values}
          handleAutoComplete = {handleAutoComplete}
          errors={errors}
          restaurantAddressHasError={restaurantAddressHasError}
          handleBlur={handleBlur}
        />
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