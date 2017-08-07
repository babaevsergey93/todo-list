import React, { Component } from 'react'
import Counter from '../components/Counter';
import TodoList from '../components/TodoList';


export default class App extends Component {
    render() {
        return <div>
            <Counter />
            <TodoList />
        </div>
    }
}

