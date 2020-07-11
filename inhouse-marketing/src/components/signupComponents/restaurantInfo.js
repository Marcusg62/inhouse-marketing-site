import React from "react"

const RestaurantInfo = props =>{
  const { values, handleChange } = props
  return(
      <>
        <label for="restaurantName" >
          Restaurant Name
          <input
            type="text"
            name="restaurantName"
            value={values.restaurantName}
            onChange={handleChange('restaurantName')}
          />
        </label ><br />
        <label for="restaurantAddress">
          Restaurant Address
          <input
            type="text"
            name="restaurantAddress"
            value={values.restaurantAddress}
            onChange={handleChange('restaurantAddress')}
          />
        </label ><br />

        <button type="submit">Next</button>
    </>
  )

}

export default RestaurantInfo;