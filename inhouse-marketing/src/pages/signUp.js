import React from "react"
import Layout from "../components/layout";
import FormFormat from "../components/Formformat";
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
  next = function(){
    const {step} = this.state
    this.setState({
      step: step+1
    })
  }
  
  // process to previous step
  back = function(){
    const {step} = this.state
    this.setState({
      step: step-1
    })
  }

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    })
  }
  
  render(){
    const { step } = this.state
    const { restaurantName, restaurantAddress, name, phone } = this.state
    const values = { restaurantName, restaurantAddress, name, phone }

    switch (step) {
      case 1:
        return <h1>step 1</h1>

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

