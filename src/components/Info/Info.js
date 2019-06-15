import React, { Component } from 'react'
import * as classnames from 'classnames'

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
            display: this.props.display
        })
    }

    render() {
        const { display } = this.state;
        return (
            <div className={cx('Info')} style={{'display': `${display}`}}>
                {this.props.data}
            </div>
        )
    }
}

export default Info;