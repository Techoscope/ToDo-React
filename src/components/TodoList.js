import React from 'react';

class TodoList extends React.Component {
  render() {
    return (
      <form>
        <input type="text"/>
        <button type="button">Add</button>
      </form>
    )
  }
}

export default TodoList;