import React from 'react';
import TodoItems from './TodoItems';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(e) {
    this.setState({
      newTask: e.target.value
    })
  }

  handleClick(e) {
    if(this.state.newTask.trim()){
      // Create a new task object
      let newItem = {
        title: this.state.newTask,
        completed: false,
        id: Date.now()
      }
      // Concatenate new task object to the previous tasks in the state
      // this.setState(prevState => {
      //   return {
      //     tasks: prevState.tasks.concat(newItem)
      //   }
      // })
      // Another concatenating method you might fiind easier
      const newTasks = [...this.state.tasks, newItem] 
      this.setState({
        tasks: newTasks
      })
      // Empty the newTask property in the state
      this.state.newTask = "";
    } else {
      alert('Please enter a value')
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/todoitems')
    .then((response) => response.json())
    .then((json) => this.setState({tasks: json}));
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" onInput={this.handleInput} value={this.state.newTask}/>
          <button type="button" onClick={this.handleClick}>Add</button>
        </form>
        <ul>
          <TodoItems tasks={this.state.tasks} foo="bar"/>
        </ul>
      </div>
    )
  }
}

export default TodoList;