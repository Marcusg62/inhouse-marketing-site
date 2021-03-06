import React from "react"
import { TextField} from '@material-ui/core'
import AutoCompleteAddress from './AutoCompleteAddress'
import {NextButton} from '../signupComponents/signUpButtons'



const RestaurantInfo = props =>{
  const { values, handleChange, next, errors, touched, handleBlur,setFieldValue,setFieldTouched} = props
  const restaurantNameHasError = errors.restaurantName && touched.restaurantName
  const restaurantAddressHasError = errors.restaurantAddress && touched.restaurantAddress
  
  const handleAutoComplete = myAddress =>{
    setFieldValue('restaurantAddress', myAddress)
  }
  
  //my custom method to handle Click
  const handleClick = () => {
  // if there are errors, then stay on this screen
    if (!touched.restaurantAddress || !touched.restaurantName){
      setFieldTouched("restaurantName")
      setFieldTouched("restaurantAddress")
    }else if(!restaurantNameHasError && !restaurantAddressHasError){
      next() // if there are no errorsm then invoke next() to next step
    } 
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
        
        <NextButton handleClick={handleClick}/>
    </>
  )

}

export default RestaurantInfo;