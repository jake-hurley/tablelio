import React, { Component } from 'react'
import { connect } from 'react-redux'

import Cart from './Cart'
import Categories from './Categories'
import Menu from './Menu'
import TableDetails from './TableDetails'

// TESTING STAFFSIDE

import Home from './staffSide/Home'

import { retrieveCompanyData, submitOrder } from '../api'

import Data from'../../data.json'

export class Table extends Component {

    componentWillMount () {
        this.getResturantData('Diablo Bar', 1)
    }

    getResturantData = (companyName, tableNumber) => {
        retrieveCompanyData(companyName)
        .then(snapshot => {
            const companyData = snapshot.val()
            this.props.setResturantData(companyData)
            this.props.isLoaded()
          })
    }

    render () {  
        if(this.props.state.isLoaded.isLoaded) {
            return (
                <>
                    {/* <h1>{mockData.companyName}</h1> */}
                    {/* <TableDetails /> */}
                    <Cart/>
                    <Categories/>
                    <Menu/>
                    <Home />
                </>
            )
        } else {
            return (
                <h1>Loading</h1>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setResturantData: (data) => dispatch({type: 'SET_RESTURANT_DATA', data}),
        viewItem: (item) => dispatch({type: 'VIEW_ITEM', item}),
        isLoaded: () => dispatch({type: 'IS_LOADED'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)