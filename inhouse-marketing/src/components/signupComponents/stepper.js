import {Stepper, Step, StepLabel} from '@material-ui/core'
import React from 'react'

const renderStepper = (step, myStepLable) =>{
    return(
      <Stepper activeStep={step-1} alternativeLabel>
      {myStepLable.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper> 
    )
  }

export default renderStepper;