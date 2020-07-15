import React, {Component} from 'react';
import logo from '../assets/logo.svg';

class TopBar extends Component {
    render() {
        return (
            <header className = "App-header">
                <img src = {logo} alt={logo} className="App-logo"/>
                <span className="App-title">Around</span>
            </header>
        );
    }
}

export default TopBar;