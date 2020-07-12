import React from "react"

const UserInfo = props =>{
  const { values, handleChange, next, back} = props
  return(
      <>
        <label for="name" >
           Name
          <input
            type="text"
            name="name"
            value={values.name}
            // to invoke the handleChange method, you need to specify a name to it so that the state will change accordingly
            onChange={handleChange('name')}
          />
        </label ><br />
        <label for="phone">
           Phone
          <input
            type="text"
            name="phone"
            value={values.phone}
            // to invoke the handleChange method, you need to specify a name to it so that the state will change accordingly
            onChange={handleChange('phone')}
          />
        </label ><br />

        <button onClick={back}>Back</button>
        <button onClick={next}>Success</button>
    </>
  )

}

export default UserInfo;