import React from "react"
import { TextField, ButtonGroup } from '@material-ui/core'
import {Button} from '@material-ui/core'

const UserInfo = props =>{
  const { values, handleChange, handleSubmit, back,errors, touched, handleBlur,setFieldTouched} = props
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
  const customSubmit = () => {
    console.log(values)
    // if there are errors, then stay on this screen
      if (!touched.name || !touched.phone){
        setFieldTouched("name")
        setFieldTouched("phone")
      }else if(!nameHasError && !phoneHasError){
        handleSubmit(values) // if there are no errorsm then invoke next() to next step
      } 
    }

  return(
      <>
       <TextField
          style={{width:"60%"}}
          error = {nameHasError}
          label="Name"
          helperText={nameHasError ? errors.name : null}
          onBlur={handleBlur}
          variant="outlined"
          defaultValue={values.name}
          onChange={handleChange}
          name="name"
        /><br />
        <TextField
          style={{width:"60%"}}
          error = {phoneHasError}
          label="Phone Number"
          placeholder="1234567890"
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
            onClick={customSubmit} 
            variant="contained"
            color="primary"
          >Submit
          </Button>
        </ButtonGroup>         
    </>
  )
}
export default UserInfo;