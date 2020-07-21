import React, {Component} from 'react';
import Register from './Register';
import Login from "./Login";

import { Switch, Route } from "react-router-dom";

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Register/>
                <Login />
                <Switch>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </div>
        );
    }
}

export default Main;