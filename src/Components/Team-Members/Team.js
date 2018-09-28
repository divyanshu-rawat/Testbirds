
import React, { Component } from 'react';
import '../../Assets/App.css';
import {Navbar} from '../../Router/Components/NavigationBar'
import Member from './Member'

class Team extends Component {

  constructor(props){
  	super(props)

    this.state = {
      ShowMembers : 5,showLess : false, showMore: true
    }

    this.remove = this.remove.bind(this)
    this.increment = this.increment.bind(this)
  }

  remove(id){
    const {delete_team_member} = this.props
    delete_team_member(id)
  }

  increment(){
      const {state:{ShowMembers}} = this
      const {Team} = this.props.state

        this.setState({
            ShowMembers: ShowMembers + 5,
        })
  }



  componentWillReceiveProps(nextProps){}

  render() {

      const {remove,increment, state:{ShowMembers,showLess,showMore}} = this
      const {Team} = this.props.state
    	return (
        <div>
          <div className = "">
            <div className="alert alert-info">
                Your <strong>Team</strong> For This Test.
            </div>

            {Team.slice(0, ShowMembers).map((listValue,i) => { 
               return <div className ="col-lg-3"  key={i}> <Member removeMember = {(id) => {remove(id)}} listValue = {listValue}/> </div>
            })}
          </div>	         
          <div className = "displayFlex">
              {Team.length > ShowMembers && showMore && <button type="button" className="btn btn-primary" onClick={increment}>Show More!</button>}
    
          </div>   

        </div>
    );
  }
}

export default Team;


 // {Team.length > 10  && showLess && <button type="button" className="btn btn-primary" onClick={toggle}>Show Less!</button>}
