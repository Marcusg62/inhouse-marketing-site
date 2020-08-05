import React from 'react'


const LoggedIn = ({user}) => {
   console.log(user.displayName)
    const renderloggedIn = () =>{
        return <h1>Welcome, {user.displayName}.</h1>
    }
 

    return(
        renderloggedIn()
    )
}

export default LoggedIn