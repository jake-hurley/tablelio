import React from 'react'
import { connect } from 'react-redux'
import { updateOrder } from '../actions/actions'

import { submitOrder, updatePriceTotal } from '../api'

class Cart extends React.Component {

    clickHandler = (item) => {
        this.props.removeFromCart(item)
    }

    submitCart = (cart, totalPrice) => {
        cart.map(cartItem => {
            this.props.updateOrder(cartItem, totalPrice)
        })
        setTimeout(() => {
            submitOrder("Diablo Bar", 2, this.props.state.cart.order)
            updatePriceTotal("Diablo Bar", 2, this.props.state.cart.totalPrice)
        }, 100)
        this.props.emptyCart()
    }

    render () {
        const cartData = this.props.state.cart.cart
        const cartTotal = this.props.state.cart.cartTotal
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
                    <h1>Order Total : ${this.props.state.cart.totalPrice}</h1>
                    <button onClick={() => this.submitCart(cartData, cartTotal)}>Submit Order</button>
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
        emptyCart: () => dispatch({type: 'EMPTY_CART'}),
        removeFromCart: (item) => dispatch({type: 'REMOVE_FROM_CART', item}),
        updateOrder: (cart, totalPrice) => dispatch({type: 'UPDATE_ORDER', cart, totalPrice})
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Cart)