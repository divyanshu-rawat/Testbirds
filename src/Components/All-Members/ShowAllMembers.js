

import React, { Component } from 'react';
import '../../Assets/App.css';
import data from '../../DataSet/data.json'
import img from '../../Assets/avatar-default.png'

class ShowAllMembers extends Component {

  constructor(props){
  	super(props)
  	this.state = {
  		data: [],
  		ShowMembers : 5
  	}

    this.toggle = this.toggle.bind(this)
  }

  componentDidMount(){
  	this.setState({ data : this.props.state.app }) 
  }

  componentWillReceiveProps(){}

  toggle() {

    const {state:{ShowMembers, data}} = this

          ShowMembers >= data.length ?
          this.setState({
              ShowMembers: ShowMembers >= data.length ? ShowMembers - 8 : ShowMembers 
          })
          :
          this.setState({
              ShowMembers: ShowMembers >= data.length ? ShowMembers : ShowMembers + 5
          })   

  }

  render() {

      const {toggle,state:{ShowMembers, data}} = this

    	return (

          <div className = "container">
		       <h3 className = "_margin_five ">Team Members!</h3>
	            <div className="row">
			           {
			           	 data && this.state && data.slice(0, ShowMembers).map((listValue,i) => {

	       	     				return <div className="team-member col-lg-2 " key={i}>
                      
	       	     			 		<img className="insideMargin" src= {img} alt="User Image" width = "50"/>
	       	     			 		<h4 className = "displayInline">({listValue.role})</h4>
	       	     			 		<p> {listValue.username} </p>
	       	     				</div>
	            			})
	            	  }
	           	</div>
              { ShowMembers <  data.length && <button type="button" className="btn btn-primary" onClick={toggle}>Show More!</button>}
              { ShowMembers >= data.length && <button type="button" className="btn btn-primary" onClick={toggle}>Show Less!</button>}
		      </div>	
    	);
  }
}



export default ShowAllMembers;
