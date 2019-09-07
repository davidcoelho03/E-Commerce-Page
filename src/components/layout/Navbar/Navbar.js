import React from 'react';
// import styles from './Navbar.css';
import styles from './Navbar.css';

const Navbar = props => (
   <header className={ styles.navbar }>
      <nav className={ styles.navbar__navigation }>
         <div></div>
         <div className={ styles.navbar__logo }><a href="/">THE LOGO</a></div>
         <div className={styles.navbar__container}>
            <ul>
               <li><a href="/"> BATATAS </a></li>
               <li><a href="/"> BATATAS </a></li>
               <li><a href="/"> BATATAS </a></li>
            </ul>
         </div>
      </nav>
   </header>
);

export default Navbar;
