import React, {Component} from 'react';
import firebase, { auth } from './firebase.js';
let navbar = (props) => {
	return (
		<div className="navbar navbar-default navbar-fixed-top" role="navigation">
	      <div className="container">
	        <div className="navbar-header">
	          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
	            <span className="sr-only">Toggle navigation</span>
	            <span className="icon-bar"></span>
	            <span className="icon-bar"></span>
	            <span className="icon-bar"></span>
	          </button>
	          <a className="navbar-brand" href="index.html">Loot.</a>
	        </div>
	        <div className="navbar-collapse collapse navbar-right">
	          <ul className="nav navbar-nav">
	            <li>{
	            	auth.currentUser ?
		            <a className="logout" onClick={e => auth.signOut()}>Log Out</a>                
		            :
		            <div></div>            
	            }</li>

	          </ul>
	        </div>
	      </div>
	    </div>
    )
}

export default navbar;