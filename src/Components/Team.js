



import React, { Component } from 'react';
import '../Assets/App.css';
import data from '../Data_set/data.json'
import img from '../Assets/avatar-default.png'
import {Navbar} from '../Router/Components/NavigationBar'

class Team extends Component {

  constructor(props){
  	super(props)
  	
  	this.state = {
  		data: [],
  		show: true
  	}

  	this.show = this.show.bind(this)
  	this.hide = this.hide.bind(this)
  }

  show() {
    	this.setState({show: false})
  };

  hide() {
    	this.setState({show: true })
  };

  componentWillReceiveProps(nextProps){}

  render() {
    	return (
          <div className = "container">
          <h4 className = "">Your Team For This Test!</h4>
	            <div className="row">
	            	<div className="description package" onMouseEnter={ this.show } onMouseLeave={ this.hide }> 
			           {
			           		 this.state.show &&  this.props.state.Team.map((listValue,i) => {
	       	     				return <div className="_margin_five col-lg-2 _border_black " key={i}  >
	       	     			 		<img className="inside_margin" src= {img} alt="User Image" />
	       	     			 		<h4>({listValue.role})</h4>
	       	     			 		<p> {listValue.username} </p>
	       	     				</div>
	            			})
	            	  }

	            	   {
			           		 !this.state.show &&  <p>cool hai </p>
	            	   }
	            	</div>
	           	</div>
		  	</div>
	            
    );
  }
}



export default Team;
