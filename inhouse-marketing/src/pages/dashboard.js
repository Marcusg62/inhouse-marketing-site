import React, { useContext } from 'react'
import Layout from '../components/layout'
import DashboardComponent from '../components/dashboard/dashboardComponent'


const Dashboard = props => {

    return(
      <Layout>
        <DashboardComponent />
      </Layout>
    )
}

export default Dashboard