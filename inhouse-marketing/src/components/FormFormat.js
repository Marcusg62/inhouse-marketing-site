import React from "react"
import ContactForm from "./contact-form"
import SignupForm from "./signupForm"

export default class FormFormat extends React.Component {

  handleInputChange = (event, formObj) => {
    const target = event.target
    const value = target.value
    const name = target.name

    formObj.setState({
      [name]: value,
    })
  }

  handleContactForm = (event, formObj) => {
    event.preventDefault()
    console.log(formObj.state)
  }

  handleSignup = (event, formObj) => {
    event.preventDefault()
    console.log("You just signed up with these information:",formObj.state)
  }


  render() {
    return (
      <div>
          {this.props.isContactForm ? <ContactForm handleInputChange={this.handleInputChange} handleSubmit = {this.handleContactForm}/> 
          :<SignupForm handleInputChange={this.handleInputChange} handleSubmit = {this.handleSignup}/>
          }
      </div>
    )
  }
}