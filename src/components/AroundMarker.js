import React, {Component} from 'react';
import { Marker, InfoWindow } from "react-google-maps";
import PropTypes from 'prop-types';
import videoMarker from '../assets/video-icon.png'
class AroundMarker extends Component {
    static  propTypes = {
        post: PropTypes.object.isRequired
    }

    state = {
        isOpen: false
    }

    // handleToggleOpen = () => {
    //     this.setState((prevState) => ({
    //             isOpen: !prevState.isOpen
    //         })
    //     );
    // }

    handleToggleOpen = () => {
        this.setState((prevState) => {
                return {
                    isOpen: !prevState.isOpen
                }
            }
        );
    }

    render() {
        const { location, user, url, message, type } = this.props.post;
        const { lat, lon } = location;
        const isImagePost = type === 'image';
        // const customIcon = isImagePost ? undefined : {
        //     url: videoMarker,
        //     scaledSize: new window.google.maps.Size(26, 41)
        // }
        const customIcon = isImagePost ? {
            url: videoMarker,
            scaledSize: new window.google.maps.Size(26, 41)
        } : undefined;

        return (
            <Marker
                position={{ lat: lat, lng: lon }}
                onClick={this.handleToggleOpen}
                onMouseOver={isImagePost ? this.handleToggleOpen : undefined}
                onMouseOut={isImagePost ? undefined : this.handleToggleOpen}
                icon={customIcon}
            >
                {
                    this.state.isOpen ?
                        (
                            <InfoWindow>
                                <div>
                                    <img src={url} alt={message} className="around-marker-image"/>
                                    <p>{`${user}: ${message}`}</p>
                                </div>
                            </InfoWindow>
                        ) : null
                }
            </Marker>
        );
    }
}

export default AroundMarker;