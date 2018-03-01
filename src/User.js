import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {loadRepos} from "./actions/repos";

class User extends Component{
    constructor(props){
        super(props);
    }
    render(){

        return(
            <div>
                <p>Привет из App, {this.props.name} {this.props.surname}!</p>
                <p>Тебе уже {this.props.age} ?</p>
                <button onClick={()=>this.props.loadRepos()}>load</button>
                {this.props.fetching?<p>Loading...</p>:null}
                {this.props.isConnectionError?<p>Error while loading repositories...</p>:null}
                <ul>
                    {this.props.reposList.map(el=><li key={el.id}>{el.name} - {el.url} </li>)}
                </ul>
            </div>
        )
    }
}

User.propTypes={
    name : PropTypes.string,
    surname: PropTypes.string,
    age: PropTypes.number,
    reposList: PropTypes.array,
    fetching: PropTypes.bool,
    isConnectionError: PropTypes.bool

}

function mapStateToProps (state) {
    return {
        name: state.profile.name,
        surname: state.profile.surname,
        age: state.profile.age,
        reposList: state.profile.reposList,
        fetching: state.profile.fetching,
        isConnectionError: state.profile.isConnectionError
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadRepos: bindActionCreators(loadRepos, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)