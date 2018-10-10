import React, { Component,Fragment } from 'react';
import TodoList from './todolist'
import Botao from './botao'
import TodoList_input from './todolist_input'

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <Fragment>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          {/*<input id="new-todo" onChange={this.handleChange} value={this.state.text}/>*/}
          <TodoList_input id="new-todo" onChange={this.handleChange}/>
          <Botao items={this.state.items}/>
        </form>
      </Fragment>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

//ReactDOM.render(<TodoApp />, mountNode);

export default TodoApp
