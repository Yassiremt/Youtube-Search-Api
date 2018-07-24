import React,{ Component } from 'react';
import { Input } from 'reactstrap';
class SearchBar extends Component {
    constructor(props){
      super(props);
      this.state = {term:""};
    }
    render(){
        return (
          <div className="col-3 w-25 mx-auto mt-4">
            <Input onChange={(ev)=>this.setState({term:ev.target.value})} />
          </div>
        );
    }
}
export default SearchBar;
