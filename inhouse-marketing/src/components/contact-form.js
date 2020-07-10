import React from "react"

const initialState = {
  name: "",
  phone: "",
  email: "",
  message: ""
}


export default class ContactForm extends React.Component {

  state = initialState

  handleInputChange =(event) => this.props.handleInputChange(event, this)

  handleSubmit = (event) => {
    this.props.handleSubmit(event, this)
    this.setState(initialState)
    this.state = initialState
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for="name">
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label><br />
        <label for="phone">
          Phone
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.handleInputChange}
          />
        </label><br />
        <label for="email">
          Email
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </label><br />
        <label for="message">
          Message
          <textarea
            type="text"
            name="message"
            value={this.state.message}
            onChange={this.handleInputChange}
          />
        </label><br />
        <button type="submit">Submit</button>
      </form>
    )
  }
}