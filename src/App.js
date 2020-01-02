import React, {Component} from 'react';
import Todos from './components/Todos'
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'todo 1',
        completed: false
      },
      {
        id: 2,
        title: 'todo 2',
        completed: false
      },
      {
        id: 3,
        title: 'todo 3',
        completed: true
      }
    ]
  }

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} />
      </div>
    )
  }
}

export default App;
