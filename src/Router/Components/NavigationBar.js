import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import '../../Assets/App.css';

export const Navbar = (props) => {
	return(
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			  <a className="navbar-brand" href="#">TestBirds</a>

			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
			    <span className="navbar-toggler-icon"></span>
			  </button>

			  <div className="collapse navbar-collapse" id="collapsibleNavbar">
			    <ul className="navbar-nav">
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
			</nav>
	)
}
