import React from "react"
import ContactForm from "./contact-form"
import SignupForm from "./signupForm"

export default class FormFormat extends React.Component {

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleContactForm = event => {
    event.preventDefault()
    console.log(this.state)
  }

  handleSignup = event => {
    event.preventDefault()
    console.log("You just signed up with these information:",this.state)
  }


  render() {
    return (
      <div>
          {this.props.isContactForm ? <ContactForm handleInputChange={this.handleContactForm} handleSubmit = {this.handleContactForm}/> 
          :<SignupForm handleInputChange={this.handleContactForm} handleSubmit = {this.handleSignup}/>
          }
      </div>
    )
  }
}