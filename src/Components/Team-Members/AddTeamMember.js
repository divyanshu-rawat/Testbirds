
import React, { Component } from 'react';
import '../../Assets/App.css';
import data from '../../DataSet/data.json'
import Team from '../../Containers/Team-Members-Container/TeamContainer';
import AutoComplete from '../AutoComplete-Component'
import {Navbar} from '../..//Router/Components/NavigationBar'


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

    let extract = value.split("-")
    let username = extract[0].trim()

    const {add_team_member} = this.props
    this.setState({ value: username })
    
    let obj = this.state.data.filter(item => item.username == username );

    console.log('Current Team', this.props.state)
    add_team_member(obj)
  }

  componentDidMount(){
   
    this.setState({ data : this.props.state.app }) 
  }

  componentDidUpdate(){}

  render() {

    const {setSelected,toggleShow, state : {showplus, data}} = this

    return (

    <div>
      <Navbar />
      <div className="marginTop">
        <div className = "col-lg-12 col-md-12 col-xs-12 col-sm-12">
            <div className = "col-lg-4">
                { 
                  data && this.state && showplus && 
                  <div>
                      <AutoComplete suggestions={data} onSelect={(val) => {setSelected(val)}} />
                  </div>
                }
                    {!showplus && <div><i className="fa fa-plus-circle fa-3x cursor" onClick = {toggleShow}></i> <span>Add Team Members</span> </div>}
            </div>

            <div className = "col-lg-7 marginTop">
                <Team />
            </div>
        </div>
      </div>
    </div>
    );
  }
}



export default AddTeamMember;
