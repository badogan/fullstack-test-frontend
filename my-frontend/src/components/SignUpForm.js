import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


class SignUp extends React.Component {

    state = {
        username: '',
        password: '',
        password_confirmation: ''
    }

    handleChange = (event) => {this.setState({[event.target.name]:event.target.value})}

    handleSubmit = (event) => {
        let newUserObject = {
            username: this.state.username,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation    
        }
        this.props.signUp(newUserObject)
    }

    render(){
        return(
            <div>
        <TextField
          id='usernameInput'
          label='New Username'
          value={this.state.username}
          onChange={this.handleChange}
          margin='normal'
          name='username'
        />
        <br />
        <TextField
          id='passwordInput'
          label='New User Password'
          value={this.state.password}
          onChange={this.handleChange}
          margin='normal'
          name='password'
          type='password'
        />
        <br />
        <TextField
          id='password_confirmationInput'
          label='Reenter Password'
          value={this.state.password_confirmation}
          onChange={this.handleChange}
          margin='normal'
          name='password_confirmation'
          type='password'
        />
        <br />
        <Button onClick={this.handleSubmit} variant='contained' color='primary'>
          SIGN UP
        </Button>
      </div>
        )
    }
}

export default SignUp;