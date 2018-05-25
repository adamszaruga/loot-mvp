import React, { Component } from 'react';
import firebase, { database, auth } from '../firebase.js';

class NeedsApproval extends Component {
	constructor(props) {
		super(props);
		
	}


	render() {
	
		return (
			<div className="form-container">
				<h1>Thank you!</h1>
				<div>We've received your application, and you should have just received an email from us.</div>
				<br />
				<div>We'll let you know once we review your application and accept you into the program. Keep an eye out for an acceptance email from us! Once approved, you should log back in and sync your Instagram account to Loot. In the meantime, email us at <a href="mailto:lootcoupons1@gmail.com">lootcoupons1@gmail.com</a> if you have any questions!</div>
				<br />
			</div>
		)

	}
}

export default NeedsApproval;