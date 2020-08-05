import React from 'react'


const LoggedIn = ({user}) => {
   console.log(user)
    const renderloggedIn = () =>{
        return <h1>Welcome, {user.email}.</h1>
    }
 

    return(
        renderloggedIn()
    )
}

export default LoggedIn