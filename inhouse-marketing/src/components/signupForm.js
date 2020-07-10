import React from "react"

export default class SignupForm extends React.Component {
  state = {
    restaurantName: "",
    restaurantAddress: "",
  }

  handleInputChange =(event) => this.props.handleInputChange(event, this)

  handleSubmit = (event) => this.props.handleSubmit(event, this)


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for="restaurantName" >
          Restaurant Name
          <input
            type="text"
            name="restaurantName"
            value={this.state.restaurantName}
            onChange={this.handleInputChange}
          />
        </label ><br />
        <label for="restaurantAddress">
          Restaurant Address
          <input
            type="text"
            name="restaurantAddress"
            value={this.state.restaurantAddress}
            onChange={this.handleInputChange}
          />
        </label ><br />

        <button type="submit">Next</button>
      </form>
    )
  }
}