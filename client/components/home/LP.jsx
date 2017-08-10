import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// dumb component controlled by corresponding container
class LandingPage extends React.Component {

	componentDidMount() {
//		!this.state.username ? this.props.loginUser() : '';
		//!this.props.username ? this.props.loadUser() : '' ;
	}

	render() {
		let ViewFriends = <Link to='/friends'><button type="button" className="btn btn-outline-primary">View friends</button></Link>
		let ViewNotifications = <Link to='/notifications'><button type="button" className="btn btn-outline-primary">View notifications</button></Link>
		let ViewProfile= <Link to='/p'><button type="button" className="btn btn-outline-primary">View profile</button></Link>
		return (
			<div>
				<h1> { this.props.username ? this.props.title : '' } </h1>
				{ this.props.profile ? 'Hello, ' + this.props.profile.name : 'Welcome to exlang, please log in or register.' }
				<div className="row">
				<div className="col-3">
				{ this.props.profile ? ViewFriends : ''}
				</div>
				<div className="col-3">
				{ this.props.profile ? ViewNotifications : ''}
				</div>
				<div className="col-3">
				{ this.props.profile ? ViewProfile : ''}
				</div>
				</div>
				<div className="todos">Add users currently online #, your last login, user stat api</div>
				<div className="todos">Add friend recent activity after blog implemented</div>
				<div className="todos">Friends pane on right side</div>
				<div className="todos">Privacy policy/additional info in footer</div>
			</div>
		)
	}
}

export default LandingPage;
