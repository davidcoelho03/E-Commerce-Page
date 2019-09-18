import React, { Component } from 'react';
import styles from './Navbar.module.css';

// Components
import Input from './components/Input';

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
               <Input></Input>
               {  !isMobile ? (<div className={ styles.navbar__items }>
                  <ul>
                     <li><a href="/"> LINK1 </a></li>
                     <li><a href="/"> LINK2 </a></li>
                     <li><a href="/"> LINK3 </a></li>
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
