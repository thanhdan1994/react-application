import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Detail from './components/detail/Detail'
import Home from './components/home/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/:slug/:id" exact component={Detail} />
      </Router>
    )
  }
}

export default App