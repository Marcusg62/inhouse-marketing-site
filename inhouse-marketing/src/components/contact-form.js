import React from "react"
import{ TextField, Button} from '@material-ui/core';

const initialState = {
  name: "",
  phone: "",
  email: "",
  message: ""
}


export default class ContactForm extends React.Component {

  state = initialState

  handleInputChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.id

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    this.setState(initialState)
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <TextField
            label="Name"
            size="small"
            type="text"
            variant="outlined"
            margin="normal"
            id="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        <br />
        <TextField
            label="Phone"
            size="small"
            type="number"
            variant="outlined"
            id="phone"
            value={this.state.phone}
            margin="normal"
            onChange={this.handleInputChange}
          />
        <br />
        <TextField
            label="Email"
            size="small"
            type="text"
            variant="outlined"
            id="email"
            value={this.state.email}
            margin="normal"
            onChange={this.handleInputChange}
          />
        <br />
        <TextField
            label="Message"
            size="medium"
            variant="outlined"
            id="message"
            value={this.state.message}
            margin="normal"
            onChange={this.handleInputChange}
            multiline
          />
        <br />
        <Button 
           type="submit" 
           variant="contained" 
           color="primary"
           size="small"
           fullWidth
           >Submit
        </Button>
      </form>
    )
  }
}