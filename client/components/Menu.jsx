import React from 'react'

class Menu extends React.Component {
    render () {
        console.log(this.props.data)
        const stockData = this.props.data.stock
        return (
            <>
                <h1>menu</h1>
                {stockData.map(item => {
                    if (item.stock > 0) {
                        return (
                            <div key={item.id}>
                                <h1>{item.name}</h1>
                                <h1>{item.price}</h1>
                            </div>
                        )
                    } else {
                        return (
                            <div key={item.id}>
                                <h1>{item.name} (OUT OF STOCK)</h1>
                            </div>
                        )
                    }
                })}
            </>
        )
    }
}

export default Menu