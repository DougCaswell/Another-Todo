import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      newItem: ''
    }
  }

  async componentDidMount() {
    let res = await axios.get('/api/get');
    this.setState({
      items: res.data
    });
  }

  getItems() {
    let list = this.state.items
    let mappedList = list.map((item) => (
      <li key={item.id}>{item.task}<button onClick={() => this.delete(item.id)}>delete</button></li>
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

  async delete(id) {
    let res = await axios.delete(`/api/delete/${id}`)
    this.setState({
      items: res.data
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
