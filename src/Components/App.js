import React, { Component } from "react";
import TaskData from "./TaskData";
import TodoList from "./TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: TaskData
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    this.setState(prevState => {
      const updated = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todo: updated
      };
    });
  }
  render() {
    const MyTodoComponent = this.state.todos.map(item => (
      <TodoList key={item.id} item={item} handleChange={this.handleChange} />
    ));
    return <div>{MyTodoComponent}</div>;
  }
}

export default App;
