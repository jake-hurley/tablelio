import React from 'react'
import { connect } from 'react-redux'

class ItemFocus extends React.Component {

    clickHandler = (item) => {
        this.props.addToCart(item)
    }
    render () {
        const itemData = this.props.state.itemView.itemInView
        return (
            <>
                <h1>We are looking at an Item</h1>
                <h1>{itemData.name}</h1>
                <button onClick={() => this.clickHandler(itemData)}>Add to cart</button>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item) => dispatch({type: 'ADD_TO_CART', item})
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemFocus)