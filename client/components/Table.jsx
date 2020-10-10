import React, { Component } from 'react'
import { connect } from 'react-redux'

import Cart from './Cart'
import Categories from './Categories'
import Menu from './Menu'
import TableDetails from './TableDetails'

import { retrieveCompanyData } from '../api'

import Data from'../../data.json'

// API CALL GATHERS ALL DATA AND PASSES IT DOWN THROUGH PROPS 5HEAD

// const mockData = Data.companies[0]

export class Table extends Component {

    componentWillMount () {
        this.getResturantData('Diablo Bar')
    }

    getResturantData = (companyName) => {
        retrieveCompanyData(companyName)
        .then(function (snapshot) {
            const companyData = snapshot.val()
            const selectedCompany = companyData.find(company => company.companyName === companyName)
            return selectedCompany
          })
          .then(data => {
            //   console.log(data)
              this.props.setResturantData(data)
              this.props.isLoaded()
            })
    }

    render () {  
        if(this.props.state.isLoaded.isLoaded) {
            console.log(this.props)
        return (
            <>
                {/* <h1>{mockData.companyName}</h1> */}
                {/* <TableDetails /> */}
                <Cart/>
                <Categories/>
                <Menu/>
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