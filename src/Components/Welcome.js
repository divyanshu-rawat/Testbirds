

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import App from './App';

const Welcome = () => (
  <div>
    <App />

    <div className = "container">
    	<h3>Welcome</h3>
    	<p>Navigate to route  &nbsp;  
		    <Link className = "nav-item nav-link" to='/showallmembers'>All Members</Link> &nbsp;
		   to see all members data.
		</p>
    	<p>Navigate to route  &nbsp;  
		    <Link className = "nav-item nav-link" to='/addteammember'>Add Members</Link> &nbsp;
		   to Add,Delete, see your team Members.</p>
    </div>

  </div>
)

export default Welcome