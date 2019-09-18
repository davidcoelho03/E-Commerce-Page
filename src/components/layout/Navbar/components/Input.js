import React, { Component } from 'react';
import styles from './Input.module.css';
import searchIcon from '../search.svg';

class Input extends Component {
   render() {
      return (
         <div className={styles.input__container}>
            <input className={styles.input__input}/>
            <img src={ searchIcon } alt={'searchIcon'}/>
         </div>
      );
   }
}

export default Input;
