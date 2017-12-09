import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom';

import Home from './pages/Home';
import Users from './pages/Users';
import Todos from './pages/Todos';
import Meetings from './pages/Meetings';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Link to="/">
                        <img src={logo} className="App-logo" alt="logo" />
                    </Link>
                    <h1 className="App-title">Welcome to React</h1>
                    <Link to="/users">Users</Link>
                    <Link to="/todos">Todos</Link>
                    <Link to="/meetings">Meetings</Link>
                </header>
                <div className="App-container">
                    <Route path="/" exact component={Home} />
                    <Route path="/users" component={Users} />
                    <Route path="/todos" component={Todos} />
                    <Route path="/meetings" component={Meetings} />
                </div>
            </div>
        );
    }
}

export default App;
