import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: ['task'],
      newItem: ''
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

  async addItem() {
    let item = this.state.newItem;
    let res = await axios.post('/api/new', { item })
    this.setState({
      items: res.data,
      newItem: ''
    })
  }
  render() {
    return (
      <div className="App" >
        <h1>Todo</h1>
        {this.getItems()}
        <h3>Add Item</h3>
        <input type="text" onChange={e => this.setState({ newItem: e.target.value })} value={this.state.newItem} />
        <button onClick={() => this.addItem()}>add</button>
      </div>
    )
  };
}

export default App;
