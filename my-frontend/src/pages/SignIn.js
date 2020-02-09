import React from 'react'
import SignInForm from '../components/SignInForm'

const SignIn = (props) => (
  <div>
    <h1>Sign in page</h1>
    <SignInForm signIn={props.signIn} />
  </div>
)

export default SignIn