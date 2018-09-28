
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

    this.setSelected = this.setSelected.bind(this)
    this.toggleShow = this.toggleShow.bind(this)
    this.reset      = this.reset.bind(this)
  }

  reset(){
    this.setState({ value: '' })
  }

  toggleShow(){
    this.setState({ showplus: !this.state.showplus })
  }

  setSelected(value){

    const {add_team_member} = this.props
    this.setState({ value: value })
    
    let obj = this.state.data.filter(item => item.username == value );
    add_team_member(obj)
  }

  componentDidMount(){
   
    this.setState({ data : this.props.state.app }) 
  }

  componentDidUpdate(){}

  render() {

    const {setSelected,toggleShow, state : {showplus, data}} = this

    return (
      <div className="_margin_top">
        <div className = "col-lg-12">
            <div className = "col-lg-4">
                { 
                  data && this.state && showplus && 
                  <div>
                      <AutoComplete suggestions={data} onSelect={(val) => {setSelected(val)}} />
                  </div>
                }
                    {!showplus && <div><i className="fa fa-plus-circle fa-3x cursor" onClick = {toggleShow}></i> <span>Add Team Members</span> </div>}
            </div>

            <div className = "col-lg-6">
                <Team />
            </div>
        </div>
      </div>
    );
  }
}



export default AddTeamMember;
