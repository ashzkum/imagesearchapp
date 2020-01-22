import React, { Component } from 'react';
import { render } from 'react-dom';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import './style.css';

class App extends React.Component {
state = {images: []}

   onSearchSubmit = async (term)=> {
    const response = await unsplash.get('/search/photos', {
      params: {query: term}      
    });

    this.setState({images: response.data.results})
  }
  render(){
    return (
      <div className="ui container" style={{marginTop: "10px"}}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          Found: {this.state.images.length} images
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
