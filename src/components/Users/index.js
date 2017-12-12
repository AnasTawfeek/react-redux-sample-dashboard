import React, { Component } from 'react';
import UserCard from '../UserCard';
import { Row, Col, Spin, Alert } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/lib/grid/style/index.css';
import 'antd/lib/spin/style/index.css';
import 'antd/lib/alert/style/index.css';

export default class Users extends Component {
    componentWillMount(){
        this.props.getUsers();
    }
    render() {
        const { users, loading, error } = this.props;
        if(loading){
            return (
                <Spin />
            )
        }else if(error){
            return (
                <Alert
                    message={error}
                    type="error"
                />
            )
        }else{
            return (
                <Row>
                    {
                        users.map(user => {
                            return (
                                <Col xs={24} sm={12} md={8} lg={6} xl={4}>
                                    <Link to={`/users/${user.id.value}`}>
                                        <UserCard user={user} />
                                    </Link>
                                </Col>
                            )
                        })
                    }
                </Row>
            )
        }
    }
}
