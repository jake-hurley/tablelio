import React from 'react'


class Cart extends React.Component {
    render () {
        const cartData = this.props.data.tables[0].cart
        return (
            <>
                <h1>Cart</h1>
                {cartData.map(item => {
                    return (
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <h2>${item.price}</h2>
                        </div>
                    )
                })}
            </>
        )
    }
}

export default Cart