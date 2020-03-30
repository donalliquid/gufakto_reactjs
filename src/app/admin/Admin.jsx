import * as React from 'react'
import {Switch, Route} from 'react-router-dom'
import Nav from './Nav';
import Dashboard from './dashboard/Dashboard';
import Profile from './profile/Profile';

function Admin({match}){

    return (
        <div>
            <Nav/> 
            <Switch>
                <Route path={match.url} exact component={Dashboard}/>
                <Route path={`${match.url}/profile`} component={Profile}/>
            </Switch>
        </div>
    );
}

export default Admin;