import React, { Component } from 'react';
import { List, Checkbox, Spin, Button } from 'antd';
import 'antd/lib/checkbox/style/index.css';
import 'antd/lib/spin/style/index.css';
import 'antd/lib/button/style/index.css';

export default class Todo extends Component {
    render(){
        const { todo, handleChange, handleDelete } = this.props;
        return (
            <List.Item>
                <List.Item.Meta
                    avatar={
                        <Spin spinning={todo.loading === true}>
                            <Checkbox
                                checked={todo.complete}
                                onChange={(e) => handleChange(todo.id, 'complete', e.target.checked)} />
                        </Spin>
                    }
                    description={
                        <span>{todo.content}</span>
                    }
                />
                <Button size="small" type="danger" onClick={() => handleDelete(todo.id)}>Delete</Button>
            </List.Item>
        )
    }
}
