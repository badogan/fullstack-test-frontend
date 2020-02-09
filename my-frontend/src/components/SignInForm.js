import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import API from '../API'

class SignInForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleSubmit = () => API.signIn(this.state.username,this.state.password)
  .then(receivedData=>this.props.signIn(receivedData))

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value })

  render () {

    return (
      <div>
        <TextField
          id='usernameInput'
          label='Username'
          value={this.state.username}
          onChange={this.handleChange}
          margin='normal'
          name='username'
        />
        <br />
        <TextField
          id='passwordInput'
          label='Password'
          value={this.state.password}
          onChange={this.handleChange}
          margin='normal'
          name='password'
          type='password'
        />
        <br />
        <Button onClick={this.handleSubmit} variant='contained' color='primary'>
          SIGN IN
        </Button>
      </div>
    )
  }
}

export default SignInForm