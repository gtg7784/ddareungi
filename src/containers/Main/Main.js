/*global daum*/

import React, { Component } from 'react'
import * as classNames from 'classnames';

import Info from '../../components/Info/Info'
import Recommand from '../../components/Recommand/Recommand'

import markerImg from '../../assets/images/marker.png'
import data from '../../assets/db/data.json'

import styles from './Main.scss'

const cx = classNames.bind(styles)
class Main extends Component{
    constructor(props) {
        super(props);

        this.state = {
            onClickState: false,
            stationIndex: 0,
            path: '/'
        }
        
        this.onClickListener = this.onClickListener.bind(this)
    }

    onClickListener(i) {
        this.setState({
            stationIndex: i,
            onClickState: this.state.onClickState === false ? true : false
        })

    }

    handleChange(event) {
      this.setState({stationSearch: event.target.value});
    }


    componentDidMount() {
        setInterval(() => {
          this.setState({ path: window.location.pathname });
        }, 1);

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
            minLevel: 4,
        });

        const markers = data.map((data, i) => {
            const marker = new daum.maps.Marker({
                position: new daum.maps.LatLng(data.stationLatitude, data.stationLongitude),
                image: new daum.maps.MarkerImage(imageSrc, imageSize, imageOption)
            })
                
            daum.maps.event.addListener(marker, 'click', () => this.onClickListener(i))

            return marker;
        })
        
        clusterer.addMarkers(markers);
    }

    render() {
        const { onClickState, stationIndex, path } = this.state;
        return (
            <div className={cx('Main')}>
                {
                    path === '/'
                        ? <Info display={onClickState === true ? 'flex' : 'none'} stationIndex={stationIndex} />
                        : <Recommand/>
                }

                <div className="Map" id="map" />
            </div>
        )
    }
}

export default Main;