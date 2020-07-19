import React from "react"
import { TextField, ButtonGroup } from '@material-ui/core'
import {Button} from '@material-ui/core'
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';

const UserInfo = props =>{
  const { values, handleChange, handleSubmit, back,errors, touched, handleBlur} = props
  const nameHasError = errors.name && touched.name
  const phoneHasError = errors.phone && touched.phone
  // function TextMaskCustom(props) {
  //   const { inputRef, ...other } = props;
  
  //   return (
  //     <MaskedInput
  //       {...other}
  //       ref={(ref) => {
  //         inputRef(ref ? ref.inputElement : null);
  //       }}
  //       mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
  //       placeholderChar={'\u2000'}
  //       showMask
  //     />
  //   );
  // }
  
  // TextMaskCustom.propTypes = {
  //   inputRef: PropTypes.func.isRequired,
  // };

  return(
      <>
       <TextField
          error = {nameHasError}
          label={nameHasError ? "Error" : "name"}
          helperText={nameHasError ? errors.name : null}
          onBlur={handleBlur}
          variant="outlined"
          defaultValue={values.name}
          onChange={handleChange}
          name="name"
        /><br />
        <TextField
          error = {phoneHasError}
          label={phoneHasError ? "Error" : "phone"}
          helperText={phoneHasError ? errors.phone : null}
          onBlur={handleBlur}
          variant="outlined"
          values={values.phone}
          defaultValue={values.phone}
          onChange={handleChange}
          name="phone"
          // InputProps={{
          //   inputComponent: TextMaskCustom
          // }}
        /> <br />

        <ButtonGroup variant="contained" >
          <Button  
            onClick={back} 
            variant="contained"
            color="primary"
          >Back
          </Button>

          <Button 
            disabled={(!touched.name || !touched.phone) || (phoneHasError || nameHasError)}            
            onClick={()=>handleSubmit(values)} 
            variant="contained"
            color="primary"
          >Submit
          </Button>
        </ButtonGroup>         
    </>
  )
}
export default UserInfo;