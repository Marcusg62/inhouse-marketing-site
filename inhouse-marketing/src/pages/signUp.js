import React from "react"
import Layout from "../components/layout";
import FormFormat from "../components/Formformat";
import RestaurantInfo from "../components/signupComponents/restaurantInfo";
// import "../components/style/signUp.css"

export default class signUp extends React.Component {
  state = {
    step: 1,
    restaurantName: "",
    restaurantAddress: "",
    name: "",
    phone:""  
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

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    })
    console.log(this.state)
  }
  
  render(){
    const { step } = this.state
    const { restaurantName, restaurantAddress, name, phone } = this.state
    const values = { restaurantName, restaurantAddress, name, phone }

    switch (step) {
      case 1:
        return <RestaurantInfo 
          values = {values} 
          handleChange = {this.handleChange}
          next = {this.next}
          back = {this.back}  
          />

      case 2:
        return <h1>step 2</h1>
    }
  }

}


// const signUp = () => {
//   const renderSignUp = () => {
//     return (
//         <div>
//           <FormFormat isContactForm={false} />
//         </div>
//     )}

//   return (
//     <Layout>
//       {renderSignUp()}
//     </Layout>
//   );
// }

