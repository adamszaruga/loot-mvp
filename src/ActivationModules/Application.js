import React, { Component } from 'react';
import firebase, { database, auth } from '../firebase.js';

class Application extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fname: "",
			lname: "",
			instagramHandle: "",
			food: false ,
			travel: false ,
			fitness: false ,
			music: false ,
			fashion: false ,
			celebrity: false ,
			business: false,
			gaming: false ,
			lifestyle: false ,
			beauty: false ,
			sports: false ,
			tech: false
		}
	}
	handleChange(e) {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}
	handleSubmit(e) {
		e.preventDefault();
		if (this.validate()){
			console.log("submit application!");
			database.ref(`activationConfigs/${auth.currentUser.uid}/application`).set({
				complete: true,
				...this.state
			});
		};
	}
	validate() {
		if (this.state.fname.length < 1) {
			return false;
		}
		if (this.state.lname.length < 1) {
			return false;
		}
		if (this.state.instagramHandle.length < 1) {
			return false;
		}
		return true;
	}
	render() {
		let buttonDisable = true;
		if (this.validate()) {
			buttonDisable = false;
		}
		return (
			<div className="form-container">
				<h1>Welcome to Loot!</h1>
				<div>We're excited to reinvent the way coupons are distributed, but we're fully aware that we won't achieve that goal without key influencers like you. As we prepare oursleves to launch this rocket, feel free to reach out to us with any questions at <a href="mailto:lootcoupons1@gmail.com">lootcoupons1@gmail.com</a></div>
				<br />
				<div>First things first - we'd like to know more about you! Fill out the application below so that we can get you into our system. We won't share this info with anyone else (take a look at our <a>Privacy Policy</a>), but we need this info to be able to match you with the right brands.</div>
				<br />
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div className="form-group">
						<label htmlFor="firstName">First Name</label>
						<input value={this.state.fname} onChange={this.handleChange.bind(this)} type="text" className="form-control" name="fname" id="firstName" placeholder="First Name" />
					</div>
					<div className="form-group">
						<label htmlFor="lastName">Last Name</label>
						<input value={this.state.lname} onChange={this.handleChange.bind(this)} type="text" className="form-control" name="lname" id="lastName" placeholder="Last Name" />
					</div>
					<div className="form-group">
						<label htmlFor="handle">Instagram Handle</label>
						<input value={this.state.instagramHandle} onChange={this.handleChange.bind(this)} type="text" className="form-control" name="instagramHandle" id="handle" placeholder="Instagram Handle" />
					</div>
		
					<small>What kind of influencer are you?</small>
					<div className="row">
						<div className="col-xs-4">
							<div className="form-check">
								<input checked={this.state.food} onChange={this.handleChange.bind(this)} type="checkbox" className="form-check-input" name="food" id="food" />
								<label className="form-check-label" htmlFor="food">Food</label>
							</div>
							<div className="form-check">
								<input checked={this.state.travel} onChange={this.handleChange.bind(this)} type="checkbox" className="form-check-input" name="travel" id="travel" />
								<label className="form-check-label" htmlFor="travel">Travel</label>
							</div>
							<div className="form-check">
								<input checked={this.state.fitness} onChange={this.handleChange.bind(this)} type="checkbox" className="form-check-input" name="fitness" id="fitness" />
								<label className="form-check-label" htmlFor="fitness">Fitness</label>
							</div>
							<div className="form-check">
								<input checked={this.state.music} onChange={this.handleChange.bind(this)} type="checkbox" className="form-check-input" name="music" id="music" />
								<label className="form-check-label" htmlFor="music">Music</label>
							</div>
						</div>
						<div className="col-xs-4">
							<div className="form-check">
								<input checked={this.state.fashion} onChange={this.handleChange.bind(this)} type="checkbox" className="form-check-input" name="fashion" id="fashion" />
								<label className="form-check-label" htmlFor="fashion">Fashion</label>
							</div>
							<div className="form-check">
								<input checked={this.state.celebrity} onChange={this.handleChange.bind(this)} type="checkbox" className="form-check-input" name="celebrity" id="celebrity" />
								<label className="form-check-label" htmlFor="celebrity">Celebrity</label>
							</div>
							<div className="form-check">
								<input checked={this.state.business} onChange={this.handleChange.bind(this)} type="checkbox" className="form-check-input" name="business" id="business" />
								<label className="form-check-label" htmlFor="business">Business</label>
							</div>
							<div className="form-check">
								<input checked={this.state.gaming} onChange={this.handleChange.bind(this)} type="checkbox" className="form-check-input" name="gaming" id="gaming" />
								<label className="form-check-label" htmlFor="gaming">Gaming</label>
							</div>
						</div>
						<div className="col-xs-4">
							<div className="form-check">
								<input checked={this.state.lifestyle} onChange={this.handleChange.bind(this)} type="checkbox" className="form-check-input" name="lifestyle" id="lifestyle" />
								<label className="form-check-label" htmlFor="lifestyle">Lifestyle</label>
							</div>
							<div className="form-check">
								<input checked={this.state.beauty} onChange={this.handleChange.bind(this)} type="checkbox" className="form-check-input" name="beauty" id="beauty" />
								<label className="form-check-label" htmlFor="beauty">Beauty</label>
							</div>
							<div className="form-check">
								<input checked={this.state.sports} onChange={this.handleChange.bind(this)} type="checkbox" className="form-check-input" name="sports" id="sports" />
								<label className="form-check-label" htmlFor="sports">Sports</label>
							</div>
							<div className="form-check">
								<input checked={this.state.tech} onChange={this.handleChange.bind(this)} type="checkbox" className="form-check-input" name="tech" id="tech" />
								<label className="form-check-label" htmlFor="tech">Technology</label>
							</div>
						</div>
					</div>
					
					
					
					
					<button type="submit" disabled={buttonDisable} className="btn btn-primary">Submit</button>
				</form>
			</div>
		)
	}
}

export default Application;