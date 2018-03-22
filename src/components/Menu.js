import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { closeMenu, closeMenuNav } from '../actions/animations';
import { UserInfo } from './UserInfo';
import { startLogout } from '../actions/auth';

export const Menu = ({ startLogout }) => (
    <menu id="menu" className="menu">
        <UserInfo/>
        <Link to="/dashboard" onClick={closeMenuNav}>
            <i className="fas fa-home"></i>
            &nbsp; Dashboard
        </Link>
        <Link to="/create" onClick={closeMenuNav}>
            <i className="fas fa-edit"></i>
            &nbsp; Add Task
        </Link>
        <Link to="/help" onClick={closeMenuNav}>
            <i className="fas fa-question-circle"></i>
            &nbsp; Help
        </Link>
        <Link to="/terms" onClick={closeMenuNav}>
            <i className="fas fa-gavel"></i>
            &nbsp; Terms
        </Link>
        <a href="https://github.com/BillGeoghegan/taskmanagerapp" onClick={closeMenuNav}>
            <i className="fab fa-github-square"></i>
            &nbsp; GitHub
        </a>
        <a href="https://www.linkedin.com/in/billgeoghegan/" onClick={closeMenuNav}>
            <i className="fab fa-linkedin"></i>
            &nbsp; LinkedIn
        </a>
        <a href="https://twitter.com/billy_geoghegan" onClick={closeMenuNav}>
            <i className="fab fa-twitter-square"></i>
            &nbsp; Twitter
        </a>
        <a href="mailto:billgeoghegan92@gmail.com">
            <i className="fas fa-envelope"></i>
            &nbsp; Contact
        </a>
        <a href="javascript:void(0)" onClick={function(event){ closeMenuNav(); startLogout()}}>
            <i className="fas fa-sign-out-alt"></i>
            &nbsp; Logout
        </a>
    </menu>
);



const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Menu);

