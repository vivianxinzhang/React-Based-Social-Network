import React, {Component} from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps";
import { POS_KEY } from "../constants";
import AroundMarker from "./AroundMarker";

class NormalAroundMap extends Component {
    render() {
        const { lat, lon } = JSON.parse(localStorage.getItem(POS_KEY));
        return (
            <GoogleMap
                defaultZoom={10}
                defaultCenter={{ lat: lat, lng: lon }}
            >
                {
                    this.props.posts.map(
                        post => <AroundMarker post={post} key={post.url}/>
                    )
                }
            </GoogleMap>
        );
    }
}

const AroundMap = withScriptjs(withGoogleMap(NormalAroundMap));
export default AroundMap;