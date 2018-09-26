
import React, { Component } from 'react';
import '../Assets/App.css';
import data from '../Data_set/data.json'

class AddTeamMember extends Component {

  constructor(props){
  	super(props)
  }

  componentDidMount(){
    console.log('shoe__',this.props)
  }

  render() {
    return (
      <div className="">
       <h4 className = "_margin_five">Add Team Member!</h4>
       
      </div>
    );
  }
}



export default AddTeamMember;
