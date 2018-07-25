import React,{ Component } from 'react';
import { Input } from 'reactstrap';
class SearchBar extends Component {
    constructor(props){
      super(props);
      this.state = {term:''};
    }
    render(){
        return (
          <div className="w-50 mx-auto mt-4">
            <Input
              onChange={(ev)=>this.onInputChange(ev.target.value)} />
          </div>
        );
    }
    onInputChange(term){
      this.setState({term});
      this.props.onSearchTermChange(term);
    }
}
export default SearchBar;
