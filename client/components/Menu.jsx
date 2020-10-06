import React from 'react'
import { connect } from 'react-redux'


class Menu extends React.Component {
    render () {
        const stockData = this.props.data.stock
        return (
            <>
                {stockData.map(item => {
                    if(( item.category === this.props.state.category.category ) || ( this.props.state.category.category === '' )) {
                        if (item.stock > 0) {
                            return (
                                <div key={item.id}>
                                    <h1>{item.name}</h1>
                                    <h1>${item.price}</h1>
                                </div>
                            )
                        } else {
                            return (
                                <div key={item.id}>
                                    <h1>{item.name} (OUT OF STOCK)</h1>
                                </div>
                            )
                        }
                }
                })}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps)(Menu)