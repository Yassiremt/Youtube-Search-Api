import React, {Component} from 'react';
import './App.css';
import YTSearch from 'youtube-api-search';
import SearchBar from './Components/search_bar';
import VideoList from './Components/video_list';
import VideoDetail from './Components/video_detail';

const apiKey = "AIzaSyBPnZq0T_BDvZxJM340rcEbdV4tUwhjIno";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('Surfboards');
  }
  videoSearch(term) {
    YTSearch({
      key: apiKey,
      term: term
    }, videos => this.setState({videos: videos, selectedVideo: videos[0]}));

  }

  render() {
    return (<div>
      <SearchBar onSearchTermChange={term =>this.videoSearch(term)}/>
      <div className="row">
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})}/></div>
    </div>);
  }
}

export default App;
