import React, { useState } from "react"
import { TextField } from '@material-ui/core'
import {Button} from '@material-ui/core'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';



const RestaurantInfo = props =>{
  const { values, handleChange, next, errors, touched, handleBlur,setFieldValue} = props
  const restaurantNameHasError = errors.restaurantName && touched.restaurantName
  const restaurantAddressHasError = errors.restaurantAddress && touched.restaurantAddress
  
  const handleAutoComplete = async myAddress =>{
    setFieldValue('restaurantAddress', myAddress)
  }

  return(
      <>      
        <TextField style={{width: "100%"}}
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

        <PlacesAutocomplete
           value={values.restaurantAddress}
           onChange={selection => handleAutoComplete(selection)}
           onSelect={selection => handleAutoComplete(selection)}
        >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <TextField
              {...getInputProps()}
              variant="outlined"
              error = {restaurantAddressHasError}
              label="Restaurant Address"
              helperText={restaurantAddressHasError ? errors.restaurantAddress : null}
              onBlur={handleBlur}
              defaultValue={values.restaurantAddress}
              name="restaurantAddress"
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#5bd1d7'}
                  : { backgroundColor: '#ffffff'};
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        </PlacesAutocomplete>
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