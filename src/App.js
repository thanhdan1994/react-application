import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import DetailPage from './components/detail/DetailPage'
import Home from './components/home/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/chi-tiet/:id" exact component={DetailPage} />
      </Router>
    )
  }
}

export default App