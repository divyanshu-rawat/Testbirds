
import React, { Component } from 'react';
import '../Assets/App.css';
import data from '../Data_set/data.json'
import Autocomplete from 'react-autocomplete'

class AddTeamMember extends Component {

  constructor(props){
  	super(props)
      this.state = {
      data: [],
      team: [],
      value: '',
      showPlus: false
    }

    this.add_team_member = this.add_team_member.bind(this)
    this.set_select = this.set_select.bind(this)
    this.toggleShow = this.toggleShow.bind(this)
  }

  add_team_member(){

  }

  toggleShow(){
    this.setState({ show: !this.state.show })
  }

  set_select(value){
    this.setState({ value: value })
  }

  componentDidMount(){
    this.setState({ data : this.props.state.app }) 
  }

  componentDidUpdate(){
    console.log('updated state', this.state)
  }

  render() {
    return (
      <div className="container _margin_top">
       <h4 className = "">Your Team For This Test!</h4>
        
        <div className = "">

            { 
                this.state.data && this.state && this.state.showPlus && <Autocomplete className = "drop-down"
                
                shouldItemRender={(item, value) => item.username.toLowerCase().indexOf(value.toLowerCase()) > -1}
                getItemValue={(item) => item.username}
                items={this.state.data}
                
                renderItem={(item, isHighlighted) =>
                  <div key={item.id} style={{ background: isHighlighted ? 'lightgray' : 'white'}} className = "drop-down-items">
                    <p>{item.username} {(item.role)}</p>
                  </div>
                }
                
                value={this.state.value}
                onChange={e => this.setState({ value: e.target.value })}
                onSelect={(val) => {this.set_select(val)}}
              />
            }
              
            {!this.state.showPlus && <div> <i className="fas fa-plus-circle fa-2x cursor" onClick = {this.toggleShow}></i> <span>Add Team Members!</span></div>}
        
        </div>


      </div>
    );
  }
}



export default AddTeamMember;
