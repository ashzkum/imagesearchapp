import React, { Component } from 'react';
import { render } from 'react-dom';
import SearchBar from './SearchBar';
import './style.css';

const App = () => {
  return (
    <div className="ui container" style={{marginTop: "10px"}}>
        <SearchBar />
    </div>
  )
}

render(<App />, document.getElementById('root'));
