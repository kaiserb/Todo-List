import React, { Component } from "react";
import TaskData from "./TaskData";

class TodoList extends Component {
  render() {
    const completedStyle = {
      color: "green",
      fontStyle: "italics",
      textDecoration: "line-through"
    };
    return (
      <div className="myTodo">
        <input
          type="checkbox"
          checked={this.props.item.completed}
          onChange={() => this.props.handleChange(this.props.item.id)}
        />
        <p style={this.props.item.completed ? completedStyle : null}>
          {this.props.item.text}
        </p>
      </div>
    );
  }
}

export default TodoList;
