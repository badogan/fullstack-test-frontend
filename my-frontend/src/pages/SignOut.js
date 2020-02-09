import React from 'react'

import SignOutForm from '../components/SignOutForm'

class SignOut extends React.Component {

    render(){
        return (
        <React.Fragment>
            <h1>Sign out</h1>
            <SignOutForm signOut={this.props.signOut} username={this.props.username}/>
        </React.Fragment>
        )
    }

}

export default SignOut;