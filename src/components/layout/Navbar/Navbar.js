import React, { Component } from 'react';
import styles from './Navbar.module.css';

// Utils
import hamburger from './hamburger.svg';
import breakpoints from "../../../utils/breakpoints";

class Navbar extends Component {
   constructor(props) {
      super(props);
      this.state = { width: 0, height: 0 };
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
   }

   componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
   }

   componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
   }

   render() {
      const { isMobile } = this.state;

      return (
         <header className={ styles.navbar }>
            <nav className={ styles.navbar__navigation }>
               <div></div>
               <div className={ styles.navbar__logo }><a href="/">Miranda</a></div>
               <div className={ styles.spacer } />
               {  !isMobile ? (<div className={ styles.navbar__items }>
                  <ul>
                     <li><a href="/"> BATATAS </a></li>
                     <li><a href="/"> BATATAS </a></li>
                     <li><a href="/"> BATATAS </a></li>
                  </ul></div>) : <img src={ hamburger } alt="Hamburger" />
               }
            </nav>
         </header>
      );
   }

   updateWindowDimensions() {
      this.setState({
         width: window.innerWidth,
         height: window.innerHeight,
         isMobile: window.innerWidth < breakpoints.tablet
      });
   }
}

export default Navbar;
