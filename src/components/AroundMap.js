import React, {Component} from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps";
import { POS_KEY } from "../constants";

class NormalAroundMap extends Component {
    render() {
        return (
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: 37, lng: -121 }}
            >
            </GoogleMap>
        );
    }
}

const AroundMap = withScriptjs(withGoogleMap(NormalAroundMap));
export default AroundMap;