import React, {Component} from 'react';
import Register from './Register';
import Login from "./Login";
import Home from "./Home";

import { Switch, Route, Redirect} from "react-router-dom";

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Switch>
                    <Route path="/register" component={Register}/>
                    <Route path="/login"
                           // component={Login} need to know if logged in already
                           render={this.getLogin}
                    />
                    <Route path="/home"
                           // component={Home} need to know if logged in already
                           render={this.getHome}
                    />
                    <Route render={this.getLogin}/>
                </Switch>
            </div>
        );
    }
    getHome = () => {
        // case 1: if already login -> <Home />
        // case 2: not yet -> <Login />
        return this.props.isLoggedIn ?
            <Home /> : <Redirect to = "/login"/>
    }
    getLogin = () => {
        // case 1: if already login -> <Home />
        // case 2: not yet -> <Login />
        return this.props.isLoggedIn ?
            <Redirect to="/home"/>
            : <Login handleLoginSucceed = {this.props.handleLoginSucceed} />
    }
}

export default Main;