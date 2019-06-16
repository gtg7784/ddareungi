import React, { Component } from 'react'
import * as classnames from 'classnames'

import data from '../../assets/db/data.json'

import styles from './Info.scss'
const cx = classnames.bind(styles)

class Info extends Component{
    constructor(props) {
        super(props);

        this.state = {
            display: this.props.display
        }
    }
    componentWillReceiveProps(){
        this.setState({
            display: this.props.display,
        })
    }

    render() {
        const { display } = this.state;
        const { stationIndex } = this.props;

        return (
            <div className={cx('Info')} style={{ 'display': `${display}` }}>
                <div>
                    {data[stationIndex].stationName}
                    <span>({data[stationIndex].stationId})</span>
                </div>
                자전거: {data[stationIndex].rackTotCnt} / {data[stationIndex].parkingBikeTotCnt} <br />
                10분 뒤에 자전거가 없어질 예정입니다.
            </div>
        )
    }
}

export default Info;