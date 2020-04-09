import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    return (
      <section>
        <h2>Todo List</h2>
        <TodoItem />
      </section>
    );
  }
}

export default TodoList;
