import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList.js';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {isFetch:false, repos:[], search: ''}
    }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>

        </header>
          <UserList/>
      </div>
    );
  }
}

