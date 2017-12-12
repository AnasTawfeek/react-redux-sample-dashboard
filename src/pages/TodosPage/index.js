import React, { Component } from 'react';
import Todos from '../../containers/TodosContainer';

export default class TodosPage extends Component {
    render (){
        return (
            <div>
                <h2>Todos Page</h2>
                <Todos />
            </div>
        )
    }
}
