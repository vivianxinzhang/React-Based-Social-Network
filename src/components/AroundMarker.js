import React, {Component} from 'react';
import { Marker, InfoWindow } from "react-google-maps";
import PropTypes from 'prop-types';

class AroundMarker extends Component {
    static  propTypes = {
        post: PropTypes.object.isRequired
    }

    state = {
        isOpen: false
    }

    // handleToggle = () => {
    //     this.setState((prevState) => ({
    //             isOpen: !prevState.isOpen
    //         })
    //     );
    // }

    handleToggle = () => {
        this.setState((prevState) => {
                return {
                    isOpen: !prevState.isOpen
                }
            }
        );
    }

    render() {
        const { location, user, url, message } = this.props.post;
        const { lat, lon } = location;
        return (
            <Marker
                position={{ lat: lat, lng: lon }}
                onClick={this.handleToggle}
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