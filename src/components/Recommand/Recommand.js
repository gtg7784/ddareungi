import React, { Component } from 'react'
import * as classnames from 'classnames'

import data from '../../assets/db/recommand.json'

import styles from './Recommand.scss'
const cx = classnames.bind(styles)

class Recommand extends Component{
    render() {
        return (
            <div className={cx('Recommand')} >
                <ul>
                    {data.map((item, i) => (
                        <li><a href={`/recommand/${i}`}>{item.date}</a></li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Recommand;