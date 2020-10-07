import React from 'react'
import { connect } from 'react-redux'

import ItemFocus from './ItemFocus'


class Menu extends React.Component {

    state = {
        itemSelected: false

    }

    clickHandler = (itemObject) => {
        // GET ITEM BY ID FROM API AND PASSING THAT DATA IN AS PROPS
        // FOR NOW PASSING IT DOWN AS THE FULL OBJECT FROM THE LISTING
        this.setState({
            itemSelected: true,
            itemObject: itemObject
        }, () => console.log(this.state.itemObject))  
    }

    render () {
        const stockData = this.props.data.stock

        if(!this.state.itemSelected) {
            return (
                <>
                    {stockData.map(item => {
                        if(( item.category === this.props.state.category.category ) || ( this.props.state.category.category === '' )) {
                            if (item.stock > 0) {
                                return (
                                    <div key={item.id} onClick={() => this.clickHandler(item)}>
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
        } else {
            return (
                <>
                <ItemFocus data={this.state.itemObject} />
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
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps)(Menu)