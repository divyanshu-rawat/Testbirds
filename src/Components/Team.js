
import React, { Component } from 'react';
import '../Assets/App.css';
import {Navbar} from '../Router/Components/NavigationBar'
import Member from '../Containers/MemberContainer'

class Team extends Component {

  constructor(props){
  	super(props)
  	
  	this.state = {
  		data: []
  	}

    this.remove = this.remove.bind(this)
  }

  remove(id){
    const {delete_team_member} = this.props
    delete_team_member(id)
  }


  componentWillReceiveProps(nextProps){}

  render() {

      const {remove} = this
    	return (
          <div className = "">
          <Member removeMember = {(id) => {remove(id)}}/>
		  	</div>	            
    );
  }
}

export default Team;
