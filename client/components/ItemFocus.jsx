import React from 'react'

class ItemFocus extends React.Component {
    render () {
        return (
            <>
                <h1>We are looking at an Item</h1>
                <h1>{this.props.data.name}</h1>
            </>
        )
    }
}

export default ItemFocus