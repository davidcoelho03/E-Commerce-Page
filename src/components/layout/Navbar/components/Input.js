import React, { Component } from 'react';
import styles from './Input.module.css';
import searchIcon from '../search.svg';
import classnames from 'classnames';

class Input extends Component {
   constructor(props) {
      super(props);

      this.state = {
         isFocused: false,
      };

      this._handleOnFocus = this._handleOnFocus.bind(this);
      this._handleOnBlur = this._handleOnBlur.bind(this);
   }

   render() {
      return (
         <div className={ classnames(styles.input__container, { [styles.focus]: this.state.isFocused} ) }>
            <input className={ styles.input__input }
                   type="text"
                   placeholder={ this.state.isFocused ? ' ' : 'Search...' }
                   onFocus={ this._handleOnFocus }
                   onBlur={ this._handleOnBlur } />
            <img src={ searchIcon } alt={'searchIcon'}/>
         </div>
      );
   }

   _handleOnFocus = () => {
      this.setState({
         isFocused: true,
      });
   };

   _handleOnBlur = () => {
      this.setState({
         isFocused: false,
      });
   };
}

export default Input;
