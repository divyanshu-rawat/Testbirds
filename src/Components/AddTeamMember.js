
import React, { Component } from 'react';
import '../Assets/App.css';
import data from '../Data_set/data.json'

class AddTeamMember extends Component {

  constructor(props){
  	super(props)
  }

  componentDidMount(){
 
  }

  render() {
    return (
      <div className="">
       <h3 className = "">Add Team Member!</h3>
       <form className="form-inline" action="/action_page.php">
          <div className="form-group">
            <label htmlFor="email">Username:</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Role:</label>
            <input type="password" className="form-control" id="pwd" />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
}



export default AddTeamMember;
