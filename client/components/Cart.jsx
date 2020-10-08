import React from 'react'
import { connect } from 'react-redux'


class Cart extends React.Component {

    clickHandler = (item) => {
        this.props.removeFromCart(item)
    }

    render () {
        const cartData = this.props.state.cart.cart
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
                {/* {cartData.map(item => {
                    return (
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <h2>${item.price}</h2>
                        </div>
                    )
                })} */}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (item) => dispatch({type: 'REMOVE_FROM_CART', item})
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Cart)