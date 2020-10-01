import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Table from './Table'


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
