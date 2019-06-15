/*global daum*/

import React, { Component } from 'react'
import * as classNames from 'classnames';

import markerImg from '../../assets/images/marker.png'
import data from '../../assets/db/data.json'

import styles from './Main.scss'

const cx = classNames.bind(styles)
class Main extends Component{
    componentDidMount() {
        // eslint-disable-next-line
        let el = document.getElementById('map');

        let map = new daum.maps.Map(el, {
            center: new daum.maps.LatLng(37.542351, 126.9645004)
        });

        var imageSrc = markerImg,
            imageSize = new daum.maps.Size(32, 32),
            imageOption = { offset: new daum.maps.Point(27, 69) };
        
        var clusterer = new daum.maps.MarkerClusterer({
            map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
            averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
            minLevel: 10 // 클러스터 할 최소 지도 레벨 
        });
        
        for (var i = 0; i < data.length; i ++) {
            var marker = new daum.maps.Marker({
                map: map,
                position: new daum.maps.LatLng(data[i].stationLatitude, data[i].stationLongitude),
                image: new daum.maps.MarkerImage(imageSrc, imageSize, imageOption)
            });
    
            // 클러스터러에 마커들을 추가합니다

            clusterer.addMarkers(marker);
        }

        // marker.setMap(map);

            
        // var markers = data.map((data,) => (
        //     new daum.maps.Marker({
        //         position: new daum.maps.LatLng(data[i].stationLatitude, data[i].stationLongitude),
        //         image: new daum.maps.MarkerImage(imageSrc, imageSize, imageOption)
        //     })
        // ));


        // eslint-enable-next-line
    }

    render() {
        return (
            <div className={cx('Main')}>
                <div className="Map" id="map" />
            </div>
        )
    }
}

export default Main;