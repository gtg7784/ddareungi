import React, { Component } from 'react';
import * as classNames from 'classnames/bind' 

import styles from './App.scss';

import Header from '../components/header/header'

import Main from '../containers/Main/Main'

const cx = classNames.bind(styles)

class App extends Component {
  render() {
    return (
      <div className={cx('App')}>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
