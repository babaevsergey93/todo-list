import React from 'react';
import './Todo.css';

export default class Todo extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            // из сторы кладу значение, которое прилетает из инпута
            value: this.props.text,
            isEditing: false
        }
    }
    // здесь вызывается метод из сторы если удалять
    deleteTodo = () => {
        this.props.deleteTodo(this.props.id)
    };

    // метод для переворота флага, в зависимости от флага
    // отображается или с кнопокй редактировать или с кнопкой сохранить
    editTodo = () => {
        this.setState((prevState, props) => ({
            isEditing: !prevState.isEditing
        }))
    };

    // отрабатывает на любое изменнение в инпуте что бы потом отдать кнопке сохранить
    onChangeHandler = (e) => {
        this.setState({
            value: e.target.value
        })
    };

    // для того что бы по нажатию на кнопку, сохранилось то что мы ввели
    saveTodo = () => {
        // проверка что бы пустую не сохранял
        if(!this.state.value) return null;
        this.setState((prevState, props) => ({
            value: this.state.value,
            isEditing: !prevState.isEditing
        }));
    };



    render(){
        let edit = this.state.isEditing;
        return(
          // если кнопка edit нажата
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
              // если кнопка edit не нажата
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

