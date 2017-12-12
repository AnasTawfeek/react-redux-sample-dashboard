import React, { Component } from 'react';
import Users from '../../containers/UsersContainer';
import UserDetails from '../../containers/UserDetailsContainer';

import { Route } from 'react-router-dom';

export default class UsersPage extends Component {
    render (){
        return (
            <div>
                <h2>Users Page</h2>
                <Route path="/users" exact component={Users} />
                <Route path="/users/:id" component={UserDetails} />
            </div>
        )
    }
}
