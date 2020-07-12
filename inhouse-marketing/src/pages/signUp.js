import React from "react"
import Layout from "../components/layout";
import FormFormat from "../components/Formformat";
import RestaurantInfo from "../components/signupComponents/restaurantInfo";
import UserInfo from "../components/signupComponents/userInfo";
// import "../components/style/signUp.css"

export default class signUp extends React.Component {
  state = {
    step: 1,
    restaurantName: "",
    restaurantAddress: "",
    name: "",
    phone:"",
    signupSuccess: false  
  }

  // process to next step
  next = () => {
    // update state.step by adding to previous state
    this.setState(prevState => {
      return {step: prevState.step + 1
    }})
  }
  
  // process to previous step
  back = () => {
    // update state.step by minus 1 from previous state
    this.setState(prevState => {
      return {step: prevState.step - 1
    }})
  }
 
  //handle all the field changes
  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    })
    console.log(this.state)
  }

  //handle form submit
  handleSubmit = () =>{
    //connect to the database, depending on the returned state, 
    //will change the state.signupSuccess to be true
    //and then render success component
    console.log(this.state)
    this.setState({
      signupSuccess: true
    })
  }
  
  render(){
    const { step } = this.state
    const { restaurantName, restaurantAddress, name, phone } = this.state
    const values = { restaurantName, restaurantAddress, name, phone }

    switch (step) {
      case 1:
        return (
        <Layout>
          <RestaurantInfo 
          values = {values} 
          handleChange = {this.handleChange}
          next = {this.next}
          />
        </Layout>
        )

      case 2:
        return (
          <Layout>
          <UserInfo 
          values = {values} 
          handleChange = {this.handleChange}
          back = {this.back}
          handleSubmit = {this.handleSubmit}
          />
        </Layout>
        )
      
      case 3:
        return <h1>success!</h1>
    }
  }

}

