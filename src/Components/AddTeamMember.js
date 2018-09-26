
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

              <Autocomplete className = "drop-down"
                
                  shouldItemRender={(item, value) => item.username.toLowerCase().indexOf(value.toLowerCase()) > -1}
                  getItemValue={(item) => item.username}
                  items={this.state.data}
                  
                  renderItem={(item, isHighlighted) =>
                    <div key={item.id} style={{ background: isHighlighted ? 'lightgray' : 'white'}} className = "drop-down-items">
                      <p>{item.username} ({item.role})</p>
                    </div>
                  }
                  
                  value={this.state.value}
                  onChange={e => this.setState({ value: e.target.value })}
                  onSelect={(val) => {this.set_select(val)}}
                /> 
               
              
                <i className="fas fa-times fa-2x cursor" onClick = {this.reset}></i>
               

             </div>
            }
              
            {!this.state.showplus && <div><i className="fas fa-plus-circle fa-2x cursor" onClick = {this.toggleShow}></i> <span>Add Team Members</span> </div>} 
        
            <h4 className = "">Your Team For This Test!</h4>
        </div>


      </div>
    );
  }
}



export default AddTeamMember;
