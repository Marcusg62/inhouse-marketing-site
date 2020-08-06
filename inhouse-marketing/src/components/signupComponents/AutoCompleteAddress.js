import PlacesAutocomplete from 'react-places-autocomplete';
import { TextField, Paper } from '@material-ui/core'
import React from 'react'

const autoCompleteAddress = props =>{
    const {values,handleAutoComplete, restaurantAddressHasError, errors, handleBlur} = props
    return(
        <PlacesAutocomplete
            value={values.restaurantAddress}
            onChange={selection => handleAutoComplete(selection)}
            onSelect={selection => handleAutoComplete(selection)}
        >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div style={{width:"60%"}}>
                <TextField
                    style={{width:"100%"}}
                    {...getInputProps()}
                    variant="outlined"
                    error = {restaurantAddressHasError}
                    label="Restaurant Address"
                    helperText={restaurantAddressHasError ? errors.restaurantAddress : null}
                    onBlur={handleBlur}
                    defaultValue={values.restaurantAddress}
                    name="restaurantAddress"
                />
                <Paper 
                    className="autocomplete-dropdown-container"
                    elevation={3}
                    variant="outlined"
                >
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
                        <span style={{padding:"3% 1%"}}>{suggestion.description}</span>
                    </div>
                    );
                })}
                </Paper>
            </div>
            )}
        </PlacesAutocomplete>
    ) 
}

export default autoCompleteAddress



