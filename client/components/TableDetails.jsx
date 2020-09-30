import React from 'react'

class TableDetails extends React.Component {
    render () {
        console.log(this.props.data)
        const tableData = this.props.data
        return (
            <>
                <h1>{tableData.tableName}</h1>
                <button>Log out</button>
                <h3>Current Total: {tableData.totalPrice}</h3>
            </>
        )
    }

}

export default TableDetails