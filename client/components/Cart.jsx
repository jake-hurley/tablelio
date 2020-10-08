import React from 'react'
import { connect } from 'react-redux'


class Cart extends React.Component {
    render () {
        const cartData = this.props.state.cart.cart
        console.log(this.props)
        return (
            <>
                <h1>Cart</h1>
                {cartData.map(item => {
                    if(cartData.map.length > 0) {
                    return (
                        <div key={item.id}>
                            <h1>{item.name}</h1>
                        </div>
                    )
                } else {
                    <h1>Cart is empty</h1>
                }
                })}
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



export default connect(mapStateToProps)(Cart)