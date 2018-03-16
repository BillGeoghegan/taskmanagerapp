import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Menu from '../components/Menu';
import { closeMenu, clickAwayMenu } from '../actions/animations';

export const PrivateRoute = ({
    isAuthenticated, 
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <Menu/>
                <div className="appBody" id="appBody" onClick={clickAwayMenu}>
                <Header/>
                <Component {...props}/>
                </div>
            </div>
        ) : (
            <Redirect to="/" />
        )
    )}/>
);

const mapStateToProps = (state) => ({
    //True if authenticated
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);