
import React, { Component } from 'react';
import '../Assets/App.css';
import data from '../Data_set/data.json'
import AddTeamMember from '../Containers/AddTeamMemberContainer';

class App extends Component {

  constructor(props){
  	super(props)
  }

  componentDidMount(){
  	// console.log('get_data',data);
  }

  render() {
    return (
      <div className="">
       		<AddTeamMember />
      </div>
    );
  }
}



export default App;
