import React from 'react'

import Button from '@material-ui/core/Button'

class SignOut extends React.Component {

    handleSubmit = () => this.props.signOut()

    render(){
        return(
            <React.Fragment>
            Welcome {this.props.username} !
            <Button onClick={this.handleSubmit} variant='contained' color='primary'>
                LOGOUT
            </Button>
            </React.Fragment>
        )
    }

}

export default SignOut;