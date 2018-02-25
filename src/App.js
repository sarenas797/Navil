import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Who from './Who';
import Products from './Products_2'
import AboutProds from './AboutProds'
import Social from './Social'
import Mexico from './Mexico'
import End from './End'
class App extends Component {
  render() {
    return (
      <div className = "App">
        <div className="Container">
        < Header />
        </div>
        <div className="Mexico">
          <Mexico />
        </div>
        <div className="Products">
          <Products />
        </div>
        <div className="AboutProds">
          <AboutProds />
        </div>
        <div className="Who">
          <Who />
        </div>
        <div className="Social">
          <Social />
        </div>
         <div className="End">
          <End />
        </div>
      </div>
    );
  }
}

export default App;
