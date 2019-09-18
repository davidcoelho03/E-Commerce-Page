import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar/Navbar.js';

class App extends Component {
   render() {
      return (
         <div className="App">
            <Navbar />
            <main style={ {marginTop:'64px'} }>
               <p>Content</p>
            </main>
         </div>
      );
   }
}

export default App;
