import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import '../../Assets/App.css';

export const Navbar = (props) => {
	return(
			<nav className="navbar navbar-inverse">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span> 
			      </button>
			      <a className="navbar-brand" href="#">TestBirds</a>
			    </div>
			    <div className="collapse navbar-collapse" id="myNavbar">
			       <ul className="nav navbar-nav">
				      <li className="nav-item">
				        <Link className = "nav-item nav-link active" to='/'>Home</Link>
				      </li>
				      <li className="nav-item">
				        <Link className = "nav-item nav-link" to='/showteammembers'>All Team Members</Link>
				      </li>
				      <li className="nav-item">
				        <Link className = "nav-item nav-link" to='/addteammember'>Add Members</Link>
				      </li> 
				    </ul>
			    </div>
			  </div>
			</nav>
	)
}
