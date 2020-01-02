import React, {Component} from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
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

  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  render() {
    return (
      <div className="App">
        <div className='container'>
          <Header />
          <AddTodo />
          <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} delTodo={this.delTodo} />
        </div>
      </div>
    )
  }
}

export default App;
