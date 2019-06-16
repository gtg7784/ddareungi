import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import * as classnames from 'classnames'
import data from '../../assets/db/recommand.json'
import styles from './Recommand.scss'
const cx = classnames.bind(styles)

class Recommand extends Component{
    render() {
        const { id } = this.props.match.params;
        return (
            <div className={cx('recommandMain')}>
                <h1>{data[id].date}의 데이터 분석 결과</h1>
                <div>{data[id].latitude}</div>
                <div>{data[id].longitude}</div>
                {data[id].latitude.map((items, i) => (
                    <div key={i}>
                        {items}
                    </div>
                ))}
            </div>
        )
    }
}

export default withRouter(Recommand);