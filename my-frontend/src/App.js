import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut'
import SignUp from './pages/SignUp';
import Order from './pages/Order'
import API from './API'

const DEFAULT_STATE = {
  username: null,
  userid: null,
  currentProduct: {},
  currentValidSizes: [],
  currentUserOrders: null
}

class App extends React.Component {

  state = {
    ...DEFAULT_STATE
  } 

  signIn = data => {
    this.setState({ username: data.username, userid: data.userid })
    API.getValidProduct().then(currentProduct=>this.setState({ currentProduct }))
    API.getValidSizes().then(currentValidSizes=>this.setState({currentValidSizes}))
    localStorage.token = data.token
  }

  signOut = () => {
    this.setState({ 
      ...DEFAULT_STATE
     })
    localStorage.removeItem('token')
    console.log('Sign out completed!')
  }

  signUp = (newUserObject) => {
    API.signUp(newUserObject).then(data=>{
      console.log('Sign up response: ', data)
      this.setState({ username: data.username });
      localStorage.token = data.token
    })
  }

  componentDidMount(){
    API.getValidProduct().then(currentProduct=>this.setState({ currentProduct }))
    API.getValidSizes().then(currentValidSizes=>this.setState({currentValidSizes}))
  }

  orderProduct = (selectedSizeId) => {
    let newOrderObject = {
      neworder: { size_id: selectedSizeId }
      }
    API.postOrder(newOrderObject).then(data=>{
      console.log("Ordered object details: ", data)
      this.getCurrentUserOrders()
    }
      )
  }

  getCurrentUserOrders = () => API.getCurrentUserOrders()
  .then(currentUserOrders=>{
    console.log("received order history: ",currentUserOrders)
    this.setState({currentUserOrders})
  })

  render () {
    const {currentProduct, currentValidSizes,currentUserOrders} = this.state
    return(
      // <Router>
      //   <Route path="/signIn" component={SignIn} />
      // </Router>
      <React.Fragment>
        {!this.state.username && <SignUp signUp={this.signUp} />}
        {!this.state.username && <SignIn signIn={this.signIn} />}
        {this.state.username && <SignOut signOut={this.signOut} username={this.state.username}/>}
        {this.state.username && 
          <Order orderProduct={this.orderProduct} currentProduct={currentProduct} 
          currentValidSizes={currentValidSizes} currentUserOrders={currentUserOrders}/>}
      </React.Fragment>
    )
  }
}
export default App;
