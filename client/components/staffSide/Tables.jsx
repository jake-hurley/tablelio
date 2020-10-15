import React from 'react'
import * as firebase from 'firebase'

import { retrieveTableData } from '../../api'


class Tables extends React.Component {
    state = {
            tables: [],
            isLoaded: false
        }

    componentDidMount () {
        const tableQuery = firebase.database().ref('companies/' + "Diablo Bar" + '/tables')
        tableQuery.on('value', snapshot => {
            const data = snapshot.val()
            // console.log(data)
            this.setState({
                tables: data,
                isLoaded: true
            })
        })
    }

    calculatePendingOrders (table) {
        if(table.order.length){
         return table.order.length
        } else return 0
    }

    render () {
        const tables = Object.values(this.state.tables)
        console.log(tables)
        if(!this.state.isLoaded) {
            return (
                <h1>loading</h1>
            )
        } else {
        return (    
            <>
                <h1>TABLES</h1>
                {tables.map(table => {
                    return (
                        <>
                        <h1>Table {tables.indexOf(table) + 1} : ${table.totalPrice}</h1>
                    <h3>{this.calculatePendingOrders(table)} items</h3>
                        </>
                    )
                })}
            </>
        )
    }
    }
}

export default Tables