import React from 'react';
import { connect } from 'react-redux';
import { getUserName } from '../actions/auth';
import selectUsername from '../selectors/tasks';
import * as firebase from 'firebase';


export class UserInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: props.username ? props.username : 'Unknown'
        };
    }
    render(){
        return(
            <div className="user-info">
                <img src="/images/usericon.png" className="user-image"/>
                <div className="user-text">
                    <h3>{this.state.username}</h3>
                    <p>364 Task Points</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: selectUsername(state.tasks, state.filters)
    };
};

export default connect(mapStateToProps)(UserInfo);