/*global daum*/

import React, { Component } from 'react'
import * as classnames from 'classnames'

import styles from './search.scss'
const cx = classnames.bind(styles)

class search extends Component{
    constructor(props) {
        super(props)
        this.state = {
            stationSearch: ''
        }
        
        this.onSearch = this.onSearch.bind(this)
    }

    onSearch(e) {
        this.setState({
            stationSearch: e.target.value
        })

        console.log(this.state.stationSearch)
    }

    SearchStation() {
        const el = document.getElementById('map');

        const map = new daum.maps.Map(el, {
            center: new daum.maps.LatLng(37.542351, 126.9645004)
        });
        
        const geocoder = new daum.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(this.state.stationSearch, function(result, status) {

            // 정상적으로 검색이 완료됐으면 
            if (status === daum.maps.services.Status.OK) {
                var coords = new daum.maps.LatLng(result[0].y, result[0].x);

                map.setCenter(coords);
            } 
        });  
    }
    
    render() {
        const { stationSearch } = this.state;
        return (
            <input className={cx('search')} type="text" value={stationSearch} onChange={this.onSearch}/>
        )
    }
}

export default search;