import React, { Component } from 'react';
import * as classNames from 'classnames/bind' 

import styles from './header.scss';
import logo from '../../assets/images/logo.png'
const cx = classNames.bind(styles)

class Header extends Component {
    render(){
        return (
            <header className={cx('header')}>
                <a href="/">
                    <img src={logo} alt=""/>
                </a>
                <ul>
                    {/* <li></li> */}
                </ul>
            </header>
        );
    }
}

export default Header;
