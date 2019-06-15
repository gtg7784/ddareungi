/*global daum*/

import React, { Component } from 'react'
import * as classNames from 'classnames';

import Info from '../../components/Info/Info'
import markerImg from '../../assets/images/marker.png'
import data from '../../assets/db/data.json'

import styles from './Main.scss'

const cx = classNames.bind(styles)
class Main extends Component{
    constructor(props) {
        super(props);

        this.state = {
            onClickState: false,
            stationData: []
        }

        this.onClickListener = this.onClickListener.bind(this)
    }

    onClickListener(data) {
        this.setState({
            stationData: data,
            onClickState: this.state.onClickState === false ? true : false
        })

        console.log(this.state.stationData)
    }

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

        const markers = data.map((data) => {
            const marker = new daum.maps.Marker({
                position: new daum.maps.LatLng(data.stationLatitude, data.stationLongitude),
                image: new daum.maps.MarkerImage(imageSrc, imageSize, imageOption)
            })
                
            daum.maps.event.addListener(marker, 'click', () => (
                this.onClickListener(data)
            ))

            return marker;
        })
        
        
        clusterer.addMarkers(markers);
    }

    render() {
        const { onClickState, stationData } = this.state;
        return (
            <div className={cx('Main')}>
                <Info display={onClickState === true ? 'flex' : 'none'} stationID={stationData} />
                <div className="Map" id="map" />
            </div>
        )
    }
}

export default Main;