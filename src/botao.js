import React, { Component } from 'react';

class Botao extends React.Component {
   render() {
     return (
       <button>
         Add #{this.props.items.length + 1}
       </button>
     );
   }
 }

 export default Botao
