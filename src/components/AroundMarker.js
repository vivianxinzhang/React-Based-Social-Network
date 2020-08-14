import React, {Component} from 'react';
import { Marker } from "react-google-maps";
import PropTypes from 'prop-types';

class AroundMarker extends Component {
    static  propTypes = {
        post: PropTypes.object.isRequired
    }

    render() {
        const { location, user, url, message } = this.props.post;
        const { lat, lon } = location;
        return (
            <Marker
                position={{ lat: lat, lng: lon }}
            />
        );
    }
}

export default AroundMarker;