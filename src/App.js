import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header/Header.js';

class App extends Component {
   render() {
      return (
         <div className="App">
            <Header />
            <main>
               <p>Content</p>
            </main>
         </div>
      );
   }
}

export default App;
