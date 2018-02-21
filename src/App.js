import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Who from './Who';
import Products from './Products'

class App extends Component {
  render() {
    return (
      <div className = "App">
        <div className="Container">
              <Header />
        </div>
        <div className="Who">
              <Who />
        </div>
        <div className="Products">
              <Products />
        </div>
      </div>
    );
  }
}

export default App;
