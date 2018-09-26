
import React, { Component } from 'react';
import '../Assets/App.css';
import AddTeamMember from '../Containers/AddTeamMemberContainer';
import ShowTeamMembers from '../Containers/ShowTeamMembersContainer';
import {Navbar} from '../Router/Components/NavigationBar'

class App extends Component {

  constructor(props){
  	super(props)
  }

  render() {
    return (
      <div className="">
          <Navbar />
      </div>
    );
  }
}



export default App;
