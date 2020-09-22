import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Scan from './Scan'

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={Scan} />
      </Router>
    </>
  )
}

export default App
