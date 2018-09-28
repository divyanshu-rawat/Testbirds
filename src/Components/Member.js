

import React, { Component } from 'react';
import img from '../Assets/avatar-default.png'


class Member extends React.Component{

	constructor(props){
		super(props)

		this.state = {
	  		showTimes: true
		}

		this.show = this.show.bind(this)
  		this.hide = this.hide.bind(this)
  		this.remove = this.remove.bind(this)
	}

	  remove(obj){
	  	const {removeMember} = this.props
	    removeMember(obj.id)
	  }

	  show() {
	    	this.setState({showTimes: false})
	  };

	  hide() {
	    	this.setState({showTimes: true })
	  };


	render(){

		const {show,hide,remove, state : {showTimes}} = this

		return(

			<div>
			    <h4>Your Team For This Test!</h4>

			    <div className="row">
			        <div>
			            { showTimes && this.props.state.Team.map((listValue,i) => { 
			     			return <div className="col-lg-3 team-member" key={i}>

			                <img className="insideMargin" src={img} alt="User Image" width="50" onMouseEnter={ show } />

			                <h4 className="displayInline">({listValue.role})</h4>
			                <p> {listValue.username} </p>
			            </div>

			            }) }
			        </div>

			        <div>
			            { !showTimes && this.props.state.Team.map((listValue,i) => { 
			            	return  <div className="team-member col-lg-3" key={i}>
			                
			                <i className="fa fa-times cursor fa-4x" aria-hidden="true" onMouseLeave={ hide } onClick={()=> remove(listValue)}></i>

			                <h4 className="displayInline">({listValue.role})</h4>
			                <p> {listValue.username} </p>
			            </div>

			            }) }
			        </div>

			    </div>
			</div>
		)
	}

}


export default Member

