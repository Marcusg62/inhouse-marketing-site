import React from 'react'
import Layout from '../components/layout'


const notLoggedIn = props => {

    const renderloggedIn = () =>{
        <h1>you haven't logged in yet.</h1>
    }
 

    return(
      <Layout>
        {renderloggedIn()}
      </Layout>
    )
}

export default notLoggedIn