

import React, { Component } from 'react';
import avatar from '../../Assets/avatar-default.png'
import check from '../../Assets/check.png'



class Member extends React.Component{

	constructor(props){
		super(props)

		this.state = {
	  		showTimes: true,
	  		check : check
		}

		console.log('property', this.props)

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

	  componentDidUpdate(){
	  	console.log('fffff',this.state.listValue,this.props)
	  }


	render(){

	  const {show,hide,remove, state : {showTimes,check}} = this
	  const {listValue} = this.props

	  return(

		<div>
		        <div>
		            { 
		               <div className="team-member">
		                  {showTimes && <img className="insideMargin" src={avatar} alt="User Image" width="50" onMouseEnter={ show } />}
		                  {!showTimes && <img className="insideMargin" src={check} alt="User Image" width="50" onMouseLeave={ hide } onClick={()=> remove(listValue)} />}
		                  <h4 className="displayInline">({listValue.role})</h4>
		                  <p> {listValue.username} </p>
		               </div>
		            }
		        </div>
	   </div>
		
		)
	}

}
export default Member

