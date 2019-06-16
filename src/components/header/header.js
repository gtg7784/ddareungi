import React, { Component } from 'react';
import * as classNames from 'classnames/bind' 

import styles from './header.scss';
import logo from '../../assets/images/logo.png'
const cx = classNames.bind(styles)

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            path: '/'
        }
    }
  
    componentDidMount() {
      setInterval(() => {
        this.setState({ path: window.location.pathname });
      }, 1);
    }

    render() {
        const { path } = this.state;
        return (
            <header className={cx('header')}>
                <a href="/">
                    <img src={logo} alt=""/>
                </a>
                <ul>
                    {
                        (path === '/' || path === '/path')
                            ? <>
                                <li><a href="/recommand">Recommand</a></li>
                            </>
                            : ''
                    }
                </ul>
            </header>
        );
    }
}

export default Header;
