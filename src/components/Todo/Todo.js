import React from 'react';
import './Todo.css';

export default class Todo extends React.Component  {
    state = {
            // put value from store, which came from input
            value: this.props.text,
            isEditing: false
    };

    // it is method from store for deleting
    deleteTodo = () => {
        this.props.deleteTodo(this.props.id)
    };

    // flag for rendering
    // false - rendering 'delete', 'edit' buttons
    // true - rendering 'save' button
    editTodo = () =>
        this.setState((prevState, props) => ({
            isEditing: !prevState.isEditing
        }));

    // works for any change in input, then gives  to button 'save'

    onChangeHandler = (e) =>
        this.setState({
            value: e.target.value
        });

    // click on button save all what we are written
    saveTodo = () => {
        // проверка что бы пустую не сохранял
        if(!this.state.value) return null;
        this.setState((prevState, props) => ({
            value: this.state.value,
            isEditing: !prevState.isEditing
        }));
    };

    render(){
        const edit = this.state.isEditing;
        return(
          // if button 'edit' is active
          edit ?
              <li>
                  <input
                      type="text"
                      className="input-field-todo"
                      defaultValue={this.state.value}
                      onChange={(e) => this.onChangeHandler(e)}
                      ref={(input) => this.input = input}/>
                  <button
                      className="btn"
                      onClick={this.saveTodo}
                  >Save</button>
              </li>

              :
              // if button 'edit' doesn't active
              <li className="todo-item" ref={(li) => {this.li = li}}>{this.state.value}
                  <button
                      className="btn delete"
                      onClick={this.deleteTodo}
                  >Delete</button>
                  <button
                      className="btn"
                      onClick={this.editTodo}
                  >Edit</button>
              </li>

        )
    }
}
