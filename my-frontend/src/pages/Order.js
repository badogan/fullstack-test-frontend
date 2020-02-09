import React from 'react';
import OrderForm from '../components/OrderForm'
import CurrentUserOrders from '../components/CurrentUserOrders'

const Order = (props) => (
    <React.Fragment>
        <h1>Order Form</h1>
        <OrderForm orderProduct={props.orderProduct} 
        currentProduct={props.currentProduct} 
        currentValidSizes={props.currentValidSizes}/>
        {props.currentUserOrders && <CurrentUserOrders currentUserOrders={props.currentUserOrders}/>}
    </React.Fragment>
)

export default Order;
