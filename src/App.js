import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import User from './User.js';
//import InputForm from './InputForm.js';

// const people = [
//     {id:1, name:"Elena", phone:"+3737771111"},
//     {id:2, name:"Elena", phone:"+3737771111"},
//     {id:3, name:"Elena", phone:"+3737771111"},
//     {id:4, name:"Elena", phone:"+3737771111"},
//     {id:5, name:"Elena", phone:"+3737771111"},
//     {id:6, name:"Elena", phone:"+3737771111"},
//     {id:7, name:"Elena", phone:"+3737771111"},
//     {id:8, name:"Elena", phone:"+3737771111"},
//     {id:9, name:"Elena", phone:"+3737771111"},
//     {id:10, name:"Elena", phone:"+3737771111"},
// ]

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {isFetch:false, repos:[], search: ''}
    }

    updateSearch(event){
       this.setState({search:event.target.value.substr(0,20)});
    }

    loadRepos(){
        this.setState({ isFetch: true });
        fetch('https://api.github.com/search/repositories?q=react')
            .then(response => response.json())
            .then(data => this.setState({ isFetch: false, repos: data.items }));
    }

  render() {
    // let filtered = this.state.repos = this.state.repos.filter(
    //           (rep) => {
    //               return rep.name.toLowerCase().indexOf(this.state.search) !== -1;})

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>

        </header>
          {/*<InputForm click={this.loadRepos.bind(this)}*/}
                     {/*change={this.updateSearch.bind(this)}*/}
                     {/*inputValue={this.state.search}*/}
                     {/*isFetch={this.state.isFetch}*/}
                     {/*filtered={filtered}/>*/}
          <User/>

      </div>
    );
  }
}

function mapStateToProps (state) {
    return {
        user: state.profile
    }
}
export default connect(mapStateToProps)(App)

