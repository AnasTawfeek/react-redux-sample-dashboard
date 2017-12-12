import React, { Component } from 'react';
import Todo from '../Todo';
import { Spin, Alert, List, Input } from 'antd';
import 'antd/lib/spin/style/index.css';
import 'antd/lib/alert/style/index.css';
import 'antd/lib/list/style/index.css';
import 'antd/lib/input/style/index.css';
import 'antd/lib/button/style/index.css';
const Search = Input.Search;

export default class Todos extends Component {
    constructor(){
        super();
        this.state = {
            newTodo: ''
        }
    }
    componentWillMount(){
        this.props.getTodos();
    }
    render(){
        const { todos, loading, error, adding, addTodo, editTodo, deleteTodo } = this.props;
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
                <div>
                    <Search
                        placeholder="Add todo..."
                        enterButton="Add"
                        value={this.state.newTodo}
                        disabled={adding}
                        onChange={event => this.setState({newTodo: event.target.value})}
                        onSearch={value => {addTodo(value, () => this.setState({newTodo: ''}));}}
                    />
                    <List
                        itemLayout="horizontal"
                        dataSource={todos}
                        renderItem={todo => (
                            <Todo
                                todo={todo}
                                handleChange={editTodo}
                                handleDelete={deleteTodo}/>
                        )}
                    />
                </div>
            )
        }
    }
}
