import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {loadUsers} from "../actions/pageActions";

class UserList extends Component{
    constructor(props){
        super(props);
    }
    render(){

        return(
            <div>
                <button onClick={()=>this.props.loadUsers(1)}>load</button>
                {this.props.fetching?<p>Loading...</p>:null}
                {this.props.isConnectionError?<p>Error while loading user's list...</p>:null}
                <ul>
                    {this.props.list.map(el=>
                        <li key={el.id}>
                            <div>
                            <p>{el.login}</p>
                            <img src={el.avatar_url} width="50px" height="50px"/>
                            </div>
                        </li>)}
                </ul>
                <button onClick={()=>this.props.loadUsers(this.props.page, false)}>Next</button>
            </div>
        )
    }
}

UserList.propTypes={
    list: PropTypes.array,
    fetching: PropTypes.bool,
    isConnectionError: PropTypes.bool,
    page: PropTypes.number,
}

function mapStateToProps (state) {
    return {
        list: state.userlist.list,
        fetching: state.userlist.fetching,
        isConnectionError: state.userlist.isConnectionError,
        page: state.userlist.page,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadUsers: bindActionCreators(loadUsers, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)