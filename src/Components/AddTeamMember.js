
import React, { Component } from 'react';
import '../Assets/App.css';
import data from '../Data_set/data.json'

class AddTeamMember extends Component {

  constructor(props){
  	super(props)
  }

  componentDidMount(){
    console.log('this', this);
  }

  render() {
    return (
      <div className="">
       <p>Add Team Member!</p>
      </div>
    );
  }
}



export default AddTeamMember;
