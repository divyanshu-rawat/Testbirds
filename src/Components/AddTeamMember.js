
import React, { Component } from 'react';
import '../Assets/App.css';
import data from '../Data_set/data.json'
// import Autocomplete from 'react-autocomplete'
import Team from '../Containers/TeamContainer';
import AutoComplete from './AutoComplete'


class AddTeamMember extends Component {

  constructor(props){
  	super(props)
      this.state = {
      data: [],
      team: [],
      value: '',
      showplus: false
    }

    this.add_team_member = this.add_team_member.bind(this)
    this.set_select = this.set_select.bind(this)
    this.toggleShow = this.toggleShow.bind(this)
    this.reset      = this.reset.bind(this)
  }

  add_team_member(){

  }

  reset(){
    this.setState({ value: '' })
  }

  toggleShow(){
    this.setState({ showplus: !this.state.showplus })
  }

  set_select(value){

    this.setState({ value: value })
    let obj = this.state.data.filter(item => item.username == value );
    this.props.add_team_member(obj)
  }

  componentDidMount(){
    this.setState({ data : this.props.state.app }) 
  }

  componentDidUpdate(){}

  render() {
    return (
      <div className="container _margin_top">
       
        
        <div className = "">

            { 
             
              this.state.data && this.state && this.state.showplus && <div>
               
              <AutoComplete suggestions={this.state.data} onSelect={(val) => {this.set_select(val)}} />

             </div>
            }
              
            {!this.state.showplus && <div><i className="fa fa-plus-circle fa-3x cursor" onClick = {this.toggleShow}></i> <span>Add Team Members</span> </div>} 

            <Team />
        </div>


      </div>
    );
  }
}



export default AddTeamMember;
