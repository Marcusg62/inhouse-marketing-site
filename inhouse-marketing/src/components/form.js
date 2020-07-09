import React from "react"

export default class ContactForm extends React.Component {
  state = {
    name: "",
    phone: "",
    email: "",
    message: ""
  }

  handleInputChange = this.props.handleInputChange

  handleSubmit = this.props.handleSubmit


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label><br />
        <label>
          Phone
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.handleInputChange}
          />
        </label><br />
        <label>
          Email
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </label><br />
        <label>
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