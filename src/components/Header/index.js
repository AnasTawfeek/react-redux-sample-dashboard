import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import 'antd/lib/menu/style/index.css';
import './styles.css';
const { Item } = Menu;


export default class Header extends Component {
    constructor(){
        super();
        this.state = {
            current: 'mail'
        }
    }
    render() {
        return (
            <header>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                    >
                        <Item key="home">
                            <Link to="/">Home</Link>
                        </Item>
                        <Item key="users">
                            <Link to="/users">Users</Link>
                        </Item>
                        <Item key="todos">
                            <Link to="/todos">Todos</Link>
                        </Item>
                        <Item key="meetings">
                            <Link to="/meetings">Meetings</Link>
                        </Item>
                    </Menu>
                </header>
            )
        }
    }
