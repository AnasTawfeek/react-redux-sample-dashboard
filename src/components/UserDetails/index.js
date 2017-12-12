import React, { Component } from 'react';
import { Row, Col, Spin, Alert } from 'antd';
import 'antd/lib/grid/style/index.css';
import 'antd/lib/spin/style/index.css';
import 'antd/lib/alert/style/index.css';

export default class UserDetails extends Component {
    componentWillMount(){
        const {user, getUser, match: {params: {id}}} = this.props;
        if (!user) getUser(id);
    }
    render(){
        const { user, loading, error } = this.props;
        console.log('Hola', this.props)
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
        }else if(user){
            return (
                <Row>
                    <Col xs={24} sm={4}>
                        <img src={user.picture.large} alt={user.name.first}/>
                    </Col>
                    <Col xs={24} sm={20}>
                        <h2>{`${user.name.first} ${user.name.last}`}</h2>
                        <p>{user.email}</p>
                        <p>{user.location.street}, {user.location.city}, {user.location.state}</p>
                        <p>{user.phone}, {user.cell}</p>
                    </Col>
                </Row>
            )
        }else{
            return null;
        }
    }
}
