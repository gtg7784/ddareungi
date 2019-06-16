/*global daum*/

import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import * as classnames from 'classnames'

import data from '../../assets/db/data.json'
import recommandData from '../../assets/db/recommand.json'
import ic_x from '../../assets/images/ic_x.png'
import markerImg from '../../assets/images/marker.png'
import styles from './Recommand.scss'
const cx = classnames.bind(styles)

class Recommand extends Component{
    constructor(props) {
        super(props)

        this.state = {
            first: 0,
            second: 0,
            third: 0
        }
    }
    

    componentDidMount() {
        const { id } = this.props.match.params;
        var first = 0;
        var second = 0;
        var third = 0;

        data.map((item, i) => {
            if (item.stationLatitude === recommandData[id].latitude[0].toString()) {
                this.setState({
                    first: i
                })
                first = i;
            }
            if (item.stationLatitude === recommandData[id].latitude[1].toString()) {
                this.setState({
                    second: i
                })
                second = i;
            }
            if (item.stationLatitude === recommandData[id].latitude[2].toString()) {
                this.setState({
                    third: i
                })
                third = i;
            }
        })

        const el1 = document.getElementById('map1');
        const el2 = document.getElementById('map2');
        const el3 = document.getElementById('map3');

        const map1 = new daum.maps.Map(el1, {
            center: new daum.maps.LatLng(data[first].stationLatitude, data[first].stationLongitude)
        });

        const map2 = new daum.maps.Map(el2, {
            center: new daum.maps.LatLng(data[second].stationLatitude, data[second].stationLongitude)
        });

        const map3 = new daum.maps.Map(el3, {
            center: new daum.maps.LatLng(data[third].stationLatitude, data[third].stationLongitude)
        });

        const imageSrc = markerImg,
            imageSize = new daum.maps.Size(32, 32),
            imageOption = { offset: new daum.maps.Point(27, 69) };
        
        const marker1 = new daum.maps.Marker({
            position: new daum.maps.LatLng(data[first].stationLatitude, data[first].stationLongitude),
            image: new daum.maps.MarkerImage(imageSrc, imageSize, imageOption)
        })

        const marker2 = new daum.maps.Marker({
            position: new daum.maps.LatLng(data[second].stationLatitude, data[second].stationLongitude),
            image: new daum.maps.MarkerImage(imageSrc, imageSize, imageOption)
        })
        
        const marker3 = new daum.maps.Marker({
            position: new daum.maps.LatLng(data[third].stationLatitude, data[third].stationLongitude),
            image: new daum.maps.MarkerImage(imageSrc, imageSize, imageOption)
        })

        marker1.setMap(map1);
        marker2.setMap(map2);
        marker3.setMap(map3);
    }

    render() {
        const { id } = this.props.match.params;
        const { first, second, third } = this.state;
        return (
            <div className={cx('recommandMain')}>
                <div>
                    <div />
                    <a href='/'>
                        <img src={ic_x} alt=""/>
                    </a>
                </div>
                <h1>{recommandData[id].date}의 데이터 분석 결과</h1>
                <div>
                    <div>
                        <h3>1. {data[first].stationName}</h3>
                        <div>
                            자전거: {data[first].rackTotCnt} / {data[first].parkingBikeTotCnt} <br />
                            10분 뒤에 자전거가 없어질 예정입니다.
                        </div>
                    </div>
                    <div id="map1"></div>
                </div>
                <div>
                    <div>
                        <h3>1. {data[second].stationName}</h3>
                        <div>
                            자전거: {data[second].rackTotCnt} / {data[second].parkingBikeTotCnt} <br />
                            22분 뒤에 자전거가 없어질 예정입니다.
                        </div>
                    </div>
                    <div id="map2"></div>
                </div>
                <div>
                    <div>
                        <h3>1. {data[third].stationName}</h3>
                        <div>
                            자전거: {data[third].rackTotCnt} / {data[third].parkingBikeTotCnt} <br />
                            31분 뒤에 자전거가 없어질 예정입니다.
                        </div>
                    </div>
                    <div id="map3"></div>
                </div>

            </div>
        )
    }
}

export default withRouter(Recommand);