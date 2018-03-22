import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout, getUserProfile  } from '../actions/auth';
import { firebase } from '../firebase/firebase';
import UserInfo from './UserInfo';
import { openMenu } from '../actions/animations';

export const Header = ({ startLogout }) => (
    <header className="header">    
        <span className="open-menu-button" id="openMenuButton" onClick={openMenu}>&#9776;</span>
        {/* <div className="content-container">
            <div className="header__content">
            </div>
        </div> */}
        <img src={getUserProfile()} className="user-image-header"/>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);