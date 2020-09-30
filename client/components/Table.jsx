import React, { Component} from 'react'

import Cart from './Cart'
import Categories from './Categories'
import Menu from './Menu'
import TableDetails from './TableDetails'

// API CALL GATHERS ALL DATA AND PASSES IT DOWN THROUGH PROPS 5HEAD

export class Table extends Component {
    render () {  
        return (
            <>
                <TableDetails />
                <Cart />
                <Categories />
                <Menu />
            </>
        )
    }
  }
  
  export default Table
  