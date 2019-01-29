import React, { Component } from 'react';
import './App.css';
import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';
import Dashboard from './Components/Dashboard';

class App extends Component {

  render() {
    return (
      <>
        <Header />
        <br />
        <Dashboard />
      </>
    )
  }
}

export default App;
