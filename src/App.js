import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom';

import Header from './components/Header';

import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import TodosPage from './pages/TodosPage';
import MeetingsPage from './pages/MeetingsPage';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <Link to="/">
                        <img src={logo} className="App-logo" alt="logo" />
                    </Link>
                    <h1 className="App-title">Welcome to React</h1>
                    <Header />
                </div>
                <div className="App-container">
                    <Route path="/" exact component={HomePage} />
                    <Route path="/users" component={UsersPage} />
                    <Route path="/todos" component={TodosPage} />
                    <Route path="/meetings" component={MeetingsPage} />
                </div>
            </div>
        );
    }
}

export default App;
