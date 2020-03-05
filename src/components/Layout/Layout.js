import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
	state = {
		showSideDrawer: false
	};
	sideDrawerHandler = () => {
		this.setState({ showSideDrawer: !this.state.showSideDrawer });
	};
	hideSideDrawer = () => {
		this.setState({ showSideDrawer: false });
	};
	render() {
		return (
			<Aux>
				<Toolbar navIconOpen={this.state.showSideDrawer} toggleSideDrawer={this.sideDrawerHandler} />
				<SideDrawer showed={this.state.showSideDrawer} clicked={this.hideSideDrawer} />
				<main className={classes.Content}>{this.props.children}</main>
			</Aux>
		);
	}
}

export default Layout;
