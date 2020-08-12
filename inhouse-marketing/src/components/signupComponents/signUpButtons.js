import React from "react"
import {Button} from "@material-ui/core"

export const NextButton = ({handleClick}) =>{
    return (
        <Button
        // disabled={ || (restaurantNameHasError || restaurantAddressHasError)}
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


