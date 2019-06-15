import React, { Component } from 'react'
import * as classnames from 'classnames'

import styles from './Info.scss'
const cx = classnames.bind(styles)

class Info extends Component{
    constructor(props) {
        super(props);

        this.state = {
            display: this.props.display,
        }
    }
    componentWillReceiveProps(){
        this.setState({
            display: this.props.display,
        })
        console.log(this.props.data)
    }

    render() {
        const { display } = this.state;
        const { data } = this.props;

        return (
            <div className={cx('Info')} style={{'display': `${display}`}}>
                STATION ID: {data} <br/>
                {/* STATION NAME: {data.stationName} <br/>
                사용 가능 주차장 갯수: {data.rackTotCnt - data.parkingBikeTotCnt} <br/>
                사용 가능 자전거 갯수: {data.parkingBikeTotCnt} <br/> */}
            </div>
        )
    }
}

export default Info;