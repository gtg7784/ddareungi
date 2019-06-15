/*global daum*/

import React, { Component } from 'react'
import * as classNames from 'classnames';

import markerImg from '../../assets/images/marker.png'
import data from '../../assets/db/data.json'

import styles from './Main.scss'

const cx = classNames.bind(styles)
class Main extends Component{
    componentDidMount() {
        const el = document.getElementById('map');

        const map = new daum.maps.Map(el, {
            center: new daum.maps.LatLng(37.542351, 126.9645004)
        });

        const imageSrc = markerImg,
            imageSize = new daum.maps.Size(32, 32),
            imageOption = { offset: new daum.maps.Point(27, 69) };
        
        const clusterer = new daum.maps.MarkerClusterer({
            map: map,
            averageCenter: true,
            minLevel: 4 
        });

        const markers = data.map((data) => (
            new daum.maps.Marker({
                position: new daum.maps.LatLng(data.stationLatitude, data.stationLongitude),
                image: new daum.maps.MarkerImage(imageSrc, imageSize, imageOption)
            })
        ))

        clusterer.addMarkers(markers);
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