import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import DetailPage from './components/detail/DetailPage'
import Home from './components/home/Home'
import Header from './components/common/header/Header';
import index from './redux/index';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/chi-tiet/:id" exact component={DetailPage} />
        <Route component={NotFound} />
      </Router>
    )
  }
}

class NotFound extends Component {
  render() {
    return (
      <h1>THIS IS PAGE 404</h1>
    )
  }
}

export default App