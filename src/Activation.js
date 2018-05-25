import React, { Component } from 'react';
import firebase, { database, auth } from './firebase.js';

import Application from './ActivationModules/Application.js';
import NeedsApproval from './ActivationModules/NeedsApproval.js';

class Activation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		}
	}
	componentDidMount() {
		database.ref(`activationConfigs/${auth.currentUser.uid}`).on('value', this.configLoaded.bind(this), this.configError.bind(this));
	}

	configLoaded(snapshot) {
		let config = snapshot.val();
		if (config === null) {
			// This means this is their first time activating
			config = {
				"application": {
					"complete": false,
					"fname": "",
					"lname": "",
					"instagramHandle": ""
				},
				"approval": false,
				"acceptedTerms": false,
				"syncedFeed": false
			}
			database.ref(`activationConfigs/${auth.currentUser.uid}`).set(config);
		}
		this.setState({
			loading: false,
			config
		});
	}

	configError(err) {
		console.error(err);
	}

	render() {
		if (this.state.loading) {
			return <div>LOADING</div>
		} else if (this.state.config.application && !this.state.config.application.complete) {
			return <Application data={this.state.config.application} />
		} else if (!this.state.config.approval) {
			return <NeedsApproval data={this.state.config.approval} />
		} else if (!this.state.config.acceptedTerms) {
			return <div>NEEDS TERMS ACCEPTANCE</div>
		} else if (!this.state.config.syncedFeed) {
			return <div>NEEDS TO SYNC</div>
		} else {
			return <div>COMPLETE!</div>
		}
	}
}

export default Activation;