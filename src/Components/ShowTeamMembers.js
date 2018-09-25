

import React, { Component } from 'react';
import '../Assets/App.css';
import data from '../Data_set/data.json'
import img from '../Assets/avatar-default.png'

class ShowTeamMembers extends Component {

  constructor(props){
  	super(props)
  	this.state = {
  		data: [],
  		show_members : 4
  	}

    this.handleShowMore = this.handleShowMore.bind(this)
  }

  componentDidMount(){
  	this.setState({ data : this.props.app }) 
  }

  componentWillReceiveProps(){}

  handleShowMore() {
    this.setState({
      show_members: this.state.show_members >= this.state.data.length ? this.state.show_members : this.state.show_members + 4
    })
  }

  render() {

    	return (

		      <div className="">
		       <h3 className = "_margin_five">Team Members!</h3>
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
                   <button type="button" className="btn btn-primary" onClick={this.handleShowMore}>Show More!</button>
		      </div>	
    	
    	);
  }
}



export default ShowTeamMembers;
