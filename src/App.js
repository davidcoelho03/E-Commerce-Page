import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar/Navbar.js';

class App extends Component {
   render() {
      return (
         <div className="App">
            <Navbar />
            <h1>BATATAS</h1>
         </div>
      );
   }
}

export default App;
