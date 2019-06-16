import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import * as classNames from 'classnames/bind' 

import styles from './App.scss';

import Header from '../components/header/header'

import Main from '../containers/Main/Main'
import Recommand from '../containers/Recommand/Recommand'
import Mobile from '../containers/Mobile/Mobile'

const cx = classNames.bind(styles)

class App extends Component {
  render() {
    return (
      <div className={cx('App')}>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/recommand" exact component={Main}/>
          <Route path="/recommand/:id" exact component={Recommand}/>
          <Route path="/mobile" exact component={Mobile}/>
        </Switch>
      </div>
    );
  }
}

export default App;
