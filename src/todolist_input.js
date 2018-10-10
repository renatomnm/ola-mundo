import React, { Component } from 'react';

class TodoList_input extends React.Component {
   render() {
     return (
       <input onChange={this.props.onChange} value={this.props.text}/>
     );
   }
 }

 export default TodoList_input
