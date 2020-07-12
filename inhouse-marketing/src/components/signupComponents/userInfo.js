import React from "react"

const UserInfo = props =>{
  const { values, handleChange, handleSubmit, back, next } = props
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
        <button onClick={handleSubmit}>Submit</button>
    </>
  )

}

export default UserInfo;