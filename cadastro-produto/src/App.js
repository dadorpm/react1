import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar'
import Router from './router'

function App() {
  return (
    <>
      <div className='container'>
        <Navbar />
        <Router />
      </div>
    </>
  );
}

export default App;
