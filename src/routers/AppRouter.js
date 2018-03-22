import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFoundPage from "../components/NotFoundPage";
import HelpPage from "../components/HelpPage";
import TermsPage from "../components/TermsPage";
import LoginPage from "../components/LoginPage";
import DashboardPage from "../components/DashboardPage";
import AddTaskPage from "../components/AddTaskPage";
import EditTaskPage from "../components/EditTaskPage";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={DashboardPage} exact={true}/>
                <PrivateRoute path="/create" component={AddTaskPage}/>
                <PrivateRoute path="/edit/:id" component={EditTaskPage}/>
                <PrivateRoute path="/help" component={HelpPage}/>
                <PrivateRoute path="/terms" component={TermsPage}/>
                <PrivateRoute component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);
export default AppRouter;