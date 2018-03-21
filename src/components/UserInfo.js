import React from 'react';
import { connect } from 'react-redux';
import { getUserName, getUserProfile } from '../actions/auth';


export const UserInfo = (props, state) => (
    <div className="user-info">
        <img src={getUserProfile()} className="user-image"/>
        <div className="user-text">
            <h3>{getUserName()}</h3>
            <p>364 Task Points</p>
        </div>
    </div>
);

