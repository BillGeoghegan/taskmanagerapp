import React from 'react';
import { connect } from 'react-redux';
import selectUsername from '../selectors/tasks';

// export const UserInfo = ({taskCount, tasksTotal}) => {
export const UserInfo = ({userName, userImage}) => {
    return(
        <div className="user-info">
            <img src="/images/usericon.png" className="user-image"/>
            <div className="user-text">
                <h3>Bill Geoghegan</h3>
                <p>364 Task Points</p>
            </div>
        </div>
    );
};

