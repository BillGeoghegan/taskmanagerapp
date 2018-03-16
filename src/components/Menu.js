import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { closeMenu, closeMenuNav } from '../actions/animations';
import { UserInfo } from './UserInfo';

export default () => (
    <menu id="menu" className="menu">
        <UserInfo/>
        {/* <img src="/images/usericon.png" className="userImage"/>
        <h2><center>Bill Geoghegan</center></h2><br/> */}
        {/* <a href="javascript:void(0)" className="closebtn" onClick={closeMenu}>&times;</a> */}
        <Link to="/dashboard" onClick={closeMenuNav}><i className="glyphicon glyphicon-home"></i>&nbsp; Dashboard</Link>
        <a href="#"><i className="glyphicon glyphicon-file"></i>&nbsp; Add Task</a>
        <a href="#"><i className="glyphicon glyphicon-user"></i>&nbsp; Clients</a>
        <a href="mailto:billgeoghegan92@gmail.com"><i className="glyphicon glyphicon-phone"></i>&nbsp; Contact</a>
    </menu>
);