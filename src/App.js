import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: ['task']
    }
  }

  async componentDidMount() {
    let res = await axios.get('/api/get');
    console.log(res.data)
    this.setState({
      items: res.data
    });
  }

  getItems() {
    let list = this.state.items
    let mappedList = list.map((task, i) => (
      <li key={i}>{task}</li>
    ))
    return (
      <ul className="list">
        {mappedList}
      </ul>
    )
  }
  render() {
    return (
      <div className="App" >
        <h1>Todo</h1>
        {this.getItems()}
      </div>
    )
  };
}

export default App;
