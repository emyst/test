import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchUsers, starIt, unStarIt} from "../actions/pageActions";
import Button from 'material-ui/Button';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import SvgIcon from 'material-ui/SvgIcon';

const iconStyles={
    marginRight: 10,
}

class UserList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { starIt, unStarIt, fetching, isConnectionError, page, unStarredUserIds, starredUserIds, firstFetchedNormalizedData } = this.props
        return(
            <div>

                <Button onClick={()=>this.props.fetchUsers(1)} variant="raised" color="primary">load</Button>
                {fetching?<p>Loading...</p>:null}
                {isConnectionError?<p>Error while loading user's list...</p>:null}
                <div>
                    <List>

                        {   unStarredUserIds.map((userId, index)=>
                                <ListItem
                                    key={index}
                                    disabled={false}>
                                    <Avatar src={firstFetchedNormalizedData.entities.users[userId].avatar_url} style={iconStyles}/>
                                    <p style={iconStyles}>{firstFetchedNormalizedData.entities.users[userId].login}</p>
                                    <SvgIcon style={iconStyles}
                                             onClick={()=>starIt(index)}>
                                        <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
                                    </SvgIcon>
                                </ListItem>
                         )}

                    </List>
                </div>
                <hr/>
                <div>
                    <List>
                        {   starredUserIds.map((userId, index)=>
                            <ListItem
                                key={index}
                                disabled={false}>
                                <Avatar src={firstFetchedNormalizedData.entities.users[userId].avatar_url} style={iconStyles}/>
                                <p style={iconStyles}>{firstFetchedNormalizedData.entities.users[userId].login}</p>
                                <SvgIcon style={iconStyles}
                                         onClick={()=>unStarIt(index)}>
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                </SvgIcon>
                            </ListItem>
                        )}

                    </List>
                </div>
                <br/>
                <Button onClick={()=>this.props.loadUsers(page, false)} variant="raised" color="primary">Next</Button>
            </div>
        )
    }
}

UserList.propTypes={
    list: PropTypes.array,
    fetching: PropTypes.bool,
    isConnectionError: PropTypes.bool,
    page: PropTypes.number,
    starredList: PropTypes.array,
    normalizedData: PropTypes.object,
    normalizedStarredData: PropTypes.object,
}

function mapStateToProps (state) {
    return {
        firstFetchedData: state.userlist.firstFetchedData,
        firstFetchedNormalizedData: state.userlist.firstFetchedNormalizedData,
        fetching: state.userlist.fetching,
        isConnectionError: state.userlist.isConnectionError,
        page: state.userlist.page,
        unStarredUserIds: state.userlist.unStarredUserIds,
        starredUserIds: state.userlist.starredUserIds,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUsers: bindActionCreators(fetchUsers, dispatch),
        starIt: bindActionCreators(starIt, dispatch),
        unStarIt: bindActionCreators(unStarIt, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList)