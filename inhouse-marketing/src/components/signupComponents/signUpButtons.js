import React from "react"
import {Button} from "@material-ui/core"

export const NextButton = ({handleClick, buttonStyle}) =>{
    return (
        <Button
        style = {buttonStyle}        
        onClick={handleClick} 
        variant="contained"
        color="primary"
      >Next
      </Button>
    )
}

export const backButton = setStep =>{
    setStep(s => s - 1)
}


