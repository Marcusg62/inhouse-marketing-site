import React from 'react'


const LoggedIn = props => {

    const renderloggedIn = ({user}) =>{
        return <h1>Welcome, {user.displayName}.</h1>
    }
 

    return(
        renderloggedIn()
    )
}

export default LoggedIn