import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';
import TopBar from "./TopBar";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Main/>
    </div>
  );
}

export default App;
