import React from 'react';
import logo from './logo.svg';
import './App.css';

function Funcionalidade() {
  return (
    <h1>Hello World</h1>
  );
}
class App extends React.Component{
  state = {
    name:''
  }
  modificarNome = (e) => {
      let nome = e.target.value;
      this.setState({
        name:nome
      })
  }
  render(){
    return(
      <>
        <h1>Hello World by {this.state.name}</h1>
        <input type="text" value={this.state.name} onChange={this.modificarNome}/>
        <p>bufa azeda</p>
      </>
    )
  }
}

export default App;
