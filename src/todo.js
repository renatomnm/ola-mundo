import React, { Component,Fragment } from 'react';
import TodoList from './todolist'
import Botao from './botao'
import TodoList_input from './todolist_input'

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '', loading:true };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    fetch('http://localhost:8000/api/listTasks').then(response=>response.json()).then(has=>this.setState({items:has,loading:false}))
  }

  render() {
    return (
      <Fragment>
        <h3>TODO</h3>
        {this.state.loading ? "Aguarde um momento" : <TodoList items={this.state.items}/>}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          {/*<input id="new-todo" onChange={this.handleChange} value={this.state.text}/>*/}
          <TodoList_input onChange={this.handleChange}/>
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

    this.setState({loading:true})

    if (!this.state.text.length) {
      return;
    }

     const newItem = {
      text: this.state.text,
       id: Date.now()
     };

    fetch('http://localhost:8000/api/addTask/',{
    	method:'POST',
    	headers: new Headers({'content-type': 'application/json'}),
    	body: JSON.stringify({
    	  "tarefa": this.state.text
    	}),
    })
    .then(res => res.json())
    .then(has => this.setState(state => ({
          items: state.items.concat(newItem),
          text: '',
          loading:false
        })
      )
    )
  }
}

//ReactDOM.render(<TodoApp />, mountNode);

export default TodoApp
