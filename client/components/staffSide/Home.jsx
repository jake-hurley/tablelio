import React from 'react'

import CompanyDetails from './CompanyDetails'
import Tables from './Tables'


class Home extends React.Component {
    render () {
        return (
            <>
                <CompanyDetails />
                <Tables />
            </>
        )
    }
}

export default Home