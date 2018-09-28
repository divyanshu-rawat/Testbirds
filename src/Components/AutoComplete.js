
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes  from "prop-types";
import '../Assets/AutoComplete.css';


class AutoComplete extends React.Component{

	static propTypes ={
		suggestions : PropTypes.instanceOf(Array)
	};

	static defaultProps = {
		suggestions: []
	};

	constructor(props){
		super(props)
		
		this.state = {

			activeSuggestion    : 0,
			filteredSuggestions : [],
			showSuggestions     : false,
			userInput           : "",
			showDropdown        : false

		}

		this.onChange  = this.onChange.bind(this)
		this.onClick   = this.onClick.bind(this)
		this.reset     = this.reset.bind(this)
		this.dropdown  = this.dropdown.bind(this)
	}

	onClick (event) {

		const {onSelect} = this.props

	    this.setState({
	      activeSuggestion: 0,
	      filteredSuggestions: [],
	      showSuggestions: false,
	      userInput: event.currentTarget.innerText,
	      showDropdown: false
	    });

	    onSelect(event.currentTarget.innerText)
	 };

	dropdown(){

		const {showDropdown} = this.state

		this.setState({
			showDropdown: !showDropdown
		})
	}

	reset(){
		console.log('clicked')
		this.setState({
	      activeSuggestion: 0,
	      filteredSuggestions: [],
	      showSuggestions: false,
	      userInput: "",
	      showDropdown: false,

	    });
	 
	 }

	onChange(event){

		const { suggestions } = this.props;
    	const userInput = event.target.value;

    	const filteredSuggestions = suggestions.filter(suggestion => suggestion.username.toLowerCase().indexOf(userInput.toLowerCase()) > -1);

    	this.setState({
	      activeSuggestion: 0,
	      filteredSuggestions,
	      showSuggestions: true,
	      userInput: event.target.value,
	      showDropdown: false,
	    });
	}

	render(){

	 const { onChange, onClick, reset,dropdown, state: {activeSuggestion,filteredSuggestions,showSuggestions,userInput,showDropdown } } = this;
	 const { suggestions } = this.props;

	 let suggestionsListComponent;

	 if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        
        suggestionsListComponent = (
          
          <ul className="suggestions"  >
            
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              return (
                <li className= "form-control" key={suggestion.username} onClick={onClick} >
                  {suggestion.username}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
	        <ul className = "suggestions">
	          <li className= "form-control" >
		                  No suggestions!
		       </li>
		    </ul>
        );
      }
    }

    if(showDropdown){

    	suggestionsListComponent = (
          
          <ul className="suggestions">
            
            {suggestions.map((suggestion, index) => {
              let className;

              return (
                <li className= "form-control" key={suggestion.username} onClick={onClick} >
                  {suggestion.username}
                </li>
              );
            })}
          </ul>
        );
    }



	 return(

		 <div className = "">
			<div className="">
			  <label htmlFor="">AutoComplete : </label>
			  <div className="set_width">
			    <div className="input-group addon">
			      <input type="text" className="form-control" onChange = {onChange} value = {userInput} onFocus= {dropdown}/>

			      {userInput != '' && <span className="input-group-addon" onClick = {reset}><i className="fa fa-times cursor" aria-hidden="true"></i></span>}
			      {!showDropdown && userInput == '' && <span className="input-group-addon" onClick = {dropdown}><i className="fa fa-chevron-circle-down cursor" aria-hidden="true"></i></span>}
			      {showDropdown && userInput == '' && <span className="input-group-addon" onClick = {dropdown}><i className="fa fa-chevron-circle-up cursor" aria-hidden="true"></i></span>}
			   
			    </div>
			  </div>
			</div>
			<div className = "">
				 {suggestionsListComponent}
			</div>
		 </div>

		)
	}


}

export default AutoComplete