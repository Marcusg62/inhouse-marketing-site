import PlacesAutocomplete from 'react-places-autocomplete';
import { TextField, Paper } from '@material-ui/core'
import React from 'react'
import googleLogo from '../../images/googleLogo.png'

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
                <img
                    src={googleLogo}
                    alt="Powered by Logo"
                    style={{ margin: "1rem", marginLeft: 0 }}
                    />
            </div>
            )}
        </PlacesAutocomplete>
    ) 
}

export default autoCompleteAddress



