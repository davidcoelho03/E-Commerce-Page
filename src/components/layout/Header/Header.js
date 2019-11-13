import React, { Component, Fragment } from 'react';
import styles from './Header.module.css';

// Components
import Input from './components/input/Input';
import Navbar from './components/navbar/Navbar';
import SmallNav from './components/small-nav/SmallNav';

// Utils
import hamburger from './hamburger.svg';
import breakpoints from "../../../utils/breakpoints";

class Header extends Component {
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
         <header className={ styles.header }>
            { !isMobile ? <Navbar /> : <SmallNav /> }
            <nav className={ styles.header__navigation }>
               <div></div>
               <div className={ styles.header__logo }><a href="/">Miranda</a></div>
               <div className={ styles.spacer } />
               {  !isMobile ?
                  <Fragment>
                     <Input/>
                     <div className={ styles.header__items }>
                        <ul>
                           <li><a href="/"> LINK1 </a></li>
                           <li><a href="/"> LINK2 </a></li>
                           <li><a href="/"> LINK3 </a></li>
                        </ul>
                     </div>
                  </Fragment> : <img src={ hamburger } alt="Hamburger" />
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

export default Header;
