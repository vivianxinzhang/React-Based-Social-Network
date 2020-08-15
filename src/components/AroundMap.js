import React, {Component} from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps";
import { POS_KEY } from "../constants";
import AroundMarker from "./AroundMarker";

class NormalAroundMap extends Component {
    render() {
        const { lat, lon } = JSON.parse(localStorage.getItem(POS_KEY));
        return (
            <GoogleMap
                ref={this.getMapRef}
                defaultZoom={10}
                defaultCenter={{ lat: lat, lng: lon }}
                onDragEnd={this.reloadMarker}
                onZoomChanged={this.reloadMarker}
            >
                {
                    this.props.posts.map(
                        post => <AroundMarker post={post} key={post.url}/>
                    )
                }
            </GoogleMap>
        );
    }

    getMapRef = (mapInstance) => {
        console.log(mapInstance);
        this.map = mapInstance;
    }

    reloadMarker = () => {
        console.log(1);
        // get location
        const center = this.getCenter();
        // get radius
        const radius = this.getRadius();
        // reload post -> call this.props.loadPostsByTopic (child -> parent)

    }

    getCenter = () => {
        const center = this.map.getCenter();
        console.log('center -> ', center);
        return {
            lat: center.lat(),
            lon: center.lng()
        };
    }

    getRadius = () => {
        const bounds = this.map.getBounds();
        console.log('bounds -> ', bounds);
        const center = this.map.getCenter();
        if (center && bounds) {
            const ne = bounds.getNorthEast();
            console.log('ne -> ', ne);
            const right = new window.google.maps.LatLng(center.lat(), ne.lng());
            console.log('right -> ', right);
            return 0.001 * window.google.maps.geometry.spherical.computeDistanceBetween(center, right);
        }
    }
}

const AroundMap = withScriptjs(withGoogleMap(NormalAroundMap));
export default AroundMap;