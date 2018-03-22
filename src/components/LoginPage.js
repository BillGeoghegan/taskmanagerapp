import React from 'react';
import { connect } from 'react-redux';
import { startLoginGoogle, startLoginFacebook } from '../actions/auth';

export const LoginPage = ({startLoginGoogle, startLoginFacebook}) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Task Management Application</h1>
            <p>Subtitle for login goes here.</p>
            <button className="button" onClick={startLoginGoogle}>Login with Google</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLoginGoogle: () => dispatch(startLoginGoogle()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);