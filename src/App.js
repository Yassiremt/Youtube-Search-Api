import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/search_bar';
import YTSearch from 'youtube-api-search'

const apiKey="AIzaSyBPnZq0T_BDvZxJM340rcEbdV4tUwhjIno";
class App extends Component {
  constructor(props){
    super(props);
    this.state={videos:[]};
    YTSearch({key: apiKey,term: 'inna'}, videos=> {
      this.setState=({videos});
    });
  }


  render() {
    return (
      <SearchBar />
    );
  }
}

export default App;
