
import React, { Component } from 'react';
import '../../Assets/App.css';
import {Navbar} from '../../Router/Components/NavigationBar'
import Member from './Member'

class Team extends Component {

  constructor(props){
  	super(props)
    this.remove = this.remove.bind(this)
  }

  remove(id){
    const {delete_team_member} = this.props
    delete_team_member(id)
  }
  componentWillReceiveProps(nextProps){}

  componentDidUpdate(){

    console.log('data',this.props.state.Team)
  }

  render() {

      const {remove} = this
    	return (
          <div className = "">
            <div className="alert alert-info">
                Your <strong>Team</strong> For This Test.
            </div>

            {this.props.state.Team.map((listValue,i) => { 
               return <div className ="col-lg-3"  key={i}> <Member removeMember = {(id) => {remove(id)}} listValue = {listValue}/> </div>
            })}
		  	  
          </div>	            
    );
  }
}

export default Team;
