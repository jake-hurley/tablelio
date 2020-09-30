import React, { Component} from 'react'

import Cart from './Cart'
import Categories from './Categories'
import Menu from './Menu'
import TableDetails from './TableDetails'

import Data from'../../data.json'

// API CALL GATHERS ALL DATA AND PASSES IT DOWN THROUGH PROPS 5HEAD

const mockData = Data.companies[0]

export class Table extends Component {
    render () {  
        return (
            <>
                <TableDetails data={mockData}/>
                <Cart data={mockData}/>
                <Categories data={mockData}/>
                <Menu data={mockData}/>
            </>
        )
    }
  }
  
  export default Table
  