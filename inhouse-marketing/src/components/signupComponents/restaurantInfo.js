import React from "react"

const RestaurantInfo = props =>{
  const { values, handleChange, next} = props
  return(
      <>
        <label for="restaurantName" >
          Restaurant Name
          <input
            type="text"
            name="restaurantName"
            value={values.restaurantName}
            // to invoke the handleChange method, you need to specify a name to it so that the state will change accordingly
            onChange={handleChange('restaurantName')}
          />
        </label ><br />
        <label for="restaurantAddress">
          Restaurant Address
          <input
            type="text"
            name="restaurantAddress"
            value={values.restaurantAddress}
            // to invoke the handleChange method, you need to specify a name to it so that the state will change accordingly
            onChange={handleChange('restaurantAddress')}
          />
        </label ><br />

        <button onClick={next}>Next</button>
    </>
  )

}

export default RestaurantInfo;