import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Who from './Who';
import Products from './Products'
import AboutProds from './AboutProds'
import Social from './Social'

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
        <div className="AboutProds">
            <AboutProds />
        </div>
        <div className="Social">
            <Social />
        </div>
      </div>
    );
  }
}

export default App;
