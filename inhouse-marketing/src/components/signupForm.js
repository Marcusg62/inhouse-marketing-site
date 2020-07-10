import React from "react"

const initialState = {
  restaurantName: "",
  restaurantAddress: "",
}

export default class SignupForm extends React.Component {
  state = initialState

  handleInputChange =(event) => this.props.handleInputChange(event, this)

  handleSubmit = (event) => {
    this.props.handleSubmit(event, this)
    this.setState(initialState)
  }


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