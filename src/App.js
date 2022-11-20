import React from 'react';
import List from './list.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const todoItem = e.target.querySelector('input').value;
    this.setState(state => ({
      items: [...state.items, todoItem]
    }));
    e.target.reset();
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" />
          <button type="submit">Add</button>
        </form>

        <List items={this.state.items} />
      </div>
    );
  } 
}

export default App;
