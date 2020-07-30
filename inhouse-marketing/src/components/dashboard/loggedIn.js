import React from 'react'
import Layout from '../components/layout'


const loggedIn = props => {

    const renderloggedIn = () =>{
        <h1>Welcome, user.</h1>
    }
 

    return(
      <Layout>
        {renderloggedIn()}
      </Layout>
    )
}

export default loggedIn