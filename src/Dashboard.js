import React, { Component } from 'react';
import firebase, { database, auth } from './firebase.js';

import Activation from './Activation.js';

class Dashboard extends Component {
	constructor(props) {
		super(props); 
		this.state = {
			loading: true
		}
		let influencerRef = database.ref(`influencers`)
		influencerRef.on('value', (snapshot)=>{
			let { isActivated } = snapshot.val();
			this.setState({
				loading: false,
				showActivation: !isActivated
			});
		}, (err)=>{console.log(err)});
		
	}
	render() {
		if (this.state.loading) {
			return <div>LOADING</div>
		}
		return (

			<div>
				{ 
					this.state.showActivation ? 
					<Activation />
					:
					<div> The user is activated </div>
				}
			</div>
			
		)
	}
}

export default Dashboard;