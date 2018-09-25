
import React, { Component } from 'react';
import '../Assets/App.css';
import AddTeamMember from '../Containers/AddTeamMemberContainer';
import ShowTeamMembers from '../Containers/ShowTeamMembersContainer';

class App extends Component {

  constructor(props){
  	super(props)
  }

  render() {
    return (
      <div className="container">
       		<AddTeamMember />
       		<ShowTeamMembers />
      </div>
    );
  }
}



export default App;
