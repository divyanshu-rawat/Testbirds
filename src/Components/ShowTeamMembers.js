

import React, { Component } from 'react';
import '../Assets/App.css';
import data from '../Data_set/data.json'
import img from '../Assets/avatar-default.png'
import {Navbar} from '../Router/Components/NavigationBar'

class ShowTeamMembers extends Component {

  constructor(props){
  	super(props)
  	this.state = {
  		data: [],
  		show_members : 5,
      show_more_Button:true
  	}

    this.toggle = this.toggle.bind(this)
  }

  componentDidMount(){
  	this.setState({ data : this.props.state.app }) 
  }

  componentWillReceiveProps(){}

  toggle() {

    this.state.show_members >= this.state.data.length ?
          this.setState({
              show_members: this.state.show_members >= this.state.data.length ? this.state.show_members - 8 : this.state.show_members 
          })
          :
          this.setState({
            show_members: this.state.show_members >= this.state.data.length ? this.state.show_members : this.state.show_members + 5
          })   

  }

  render() {

    	return (

          <div className = "container">
		       <h3 className = "_margin_five ">Team Members!</h3>
	            <div className="row">
			           {
			           		this.state.data && this.state && this.state.data.slice(0, this.state.show_members).map((listValue,i) => {
	       	     				return <div className="_margin_five col-lg-2 _border_black " key={i}  >
	       	     			 		<img className="inside_margin" src= {img} alt="User Image" />
	       	     			 		<h4>({listValue.role})</h4>
	       	     			 		<p> {listValue.username} </p>
	       	     				</div>
	            			})
	            	  }
	           	</div>
              { this.state.show_members < this.state.data.length && <button type="button" className="btn btn-primary" onClick={this.toggle}>Show More!</button>}
              { this.state.show_members >= this.state.data.length && <button type="button" className="btn btn-primary" onClick={this.toggle}>Show Less!</button>}
		      </div>	
    	);
  }
}



export default ShowTeamMembers;
