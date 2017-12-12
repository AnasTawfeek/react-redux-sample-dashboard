import React, { Component } from 'react';
import { Card } from 'antd';
import 'antd/lib/card/style/index.css';
const { Meta } = Card;

export default class UserCard extends Component {
    render(){
        const { user: {name, email, picture} } = this.props;
        return (
            <Card
                hoverable
                cover={<img alt={`${name.first} ${name.last}`} src={picture.large} />}>
                <Meta
                    title={`${name.first} ${name.last}`}
                    description={email}
                />
            </Card>
        )
    }
}
