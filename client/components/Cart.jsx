import React from 'react'
import { connect } from 'react-redux'
import { updateOrder } from '../actions/actions'

import { submitOrder } from '../api'

class Cart extends React.Component {

    clickHandler = (item) => {
        this.props.removeFromCart(item)
    }

    submitCart = (cart) => {
        cart.map(cartItem => {
            this.props.updateOrder(cartItem)
        })
        setTimeout(() => submitOrder("Diablo Bar", 2, this.props.state.cart.order), 100)
    }

    render () {
        const cartData = this.props.state.cart.cart
        if(!this.props.state.isLoaded.isLoaded){
            return (
                <h1>Loading</h1>
            )
        } else {
            return (
                <>
                    <h1>Cart</h1>
                    {cartData.map(item => {
                        if(cartData.length > 0) {
                            return (
                                <div>
                                    <h1>{item.name}</h1>
                                    <button onClick={() => this.clickHandler(item)}>remove from cart</button>
                                </div>
                            )
                        } else {
                            return (
                                <h1>Cart is empty</h1>
                            )
                        }
                    })}
                    <h1>cart Total : ${this.props.state.cart.cartTotal}</h1>
                    <button onClick={() => this.submitCart(cartData)}>Submit Order</button>
                </>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (item) => dispatch({type: 'REMOVE_FROM_CART', item}),
        updateOrder: (cart) => dispatch({type: 'UPDATE_ORDER', cart})
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Cart)