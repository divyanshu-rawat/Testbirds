import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import '../../Assets/App.css';

export const Navbar = (props) => {
	return(
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
			  <a class="navbar-brand" href="#">TestBirds</a>

			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
			    <span class="navbar-toggler-icon"></span>
			  </button>

			  <div class="collapse navbar-collapse" id="collapsibleNavbar">
			    <ul class="navbar-nav">
			      <li class="nav-item">
			        <Link className = "nav-item nav-link active" to='/'>Home</Link>
			      </li>
			      <li class="nav-item">
			        <Link className = "nav-item nav-link" to='/showteammembers'>All Team Members</Link>
			      </li>
			      <li class="nav-item">
			        <Link className = "nav-item nav-link" to='/addteammember'>Add Members</Link>
			      </li> 
			    </ul>
			  </div> 
			</nav>
	)
}
