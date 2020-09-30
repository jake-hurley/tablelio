import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

// import Scan from './Scan'
import Table from './Table'
// import Cart from './Cart'
// import Categories from './Categories'
// import Menu from './Menu'
// import TableDetails from './TableDetails'

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={Table} />
      </Router>
    </>
  )
}

export default App
