import React from 'react';
import '../styles/App.css';
import TopBar from "./TopBar";
import Main from "./Main";
import { TOKEN_KEY} from "../constants";

class App extends React.Component{
    state = {
        isLoggedIn: Boolean(localStorage.getItem(TOKEN_KEY))
    }

    handleLoginSucceed = (token) => {
        console.log(token);
        localStorage.setItem(TOKEN_KEY, token);
        this.setState({
            isLoggedIn: true
        })
    }

    render() {
        return (
            <div className="App">
                <TopBar/>
                <Main isLoggedIn = {this.state.isLoggedIn}
                      handleLoginSucceed = {this.handleLoginSucceed}
                />
            </div>
        );
    }
}

export default App;
