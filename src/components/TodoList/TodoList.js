import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';
import {addTodo} from '../../actions/PageActions'
import {deleteTodo} from '../../actions/PageActions'
import './TodoList.css';



class TodoList extends React.Component {
    state = {
        value: ''
    };
    renderTodos = () => (
         this.props.todos.map(
            (todo, index) => (
                 <Todo
                        id={todo.id}
                        text={todo.text}
                        key={Math.random(index)}
                        deleteTodo={this.props.deleteTodo}
                 />
            )
         )
    );

    clickListener = () => {
        // if empty, doesn't add
        if(this.state.value === '') {
            return null;
        }
        this.props.buttonListener(this.state.value);
        this.setState({
            value: ''
        })
    };

    handleInputChange = (e) =>
        this.setState({
            value: e.target.value
        });

    render() {
        return(
                <div className="todo-list-container">
                    <form className="todo-form" onSubmit = {(e => e.preventDefault())}>
                        <input
                            className="input-field"
                            value={this.state.value}
                            type="text"
                            onChange={this.handleInputChange}
                        />
                        <button className="btn add" onClick={this.clickListener}>Add</button>
                    </form>
                    <ul className="todo-container">
                        {
                            this.renderTodos()
                        }
                    </ul>
                </div>
        )
    }
}

const mapStateToProps = (store) => ({
    todos: store.todos
});

const mapDispatchToProps = (dispatch) => ({
    buttonListener: (text) => dispatch(addTodo(text)),
    deleteTodo: (id) => dispatch(deleteTodo(id))
});

TodoList.propTypes = {
    todos: PropTypes.array,
    buttonListener: PropTypes.func,
    deleteTodo: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

