import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import DrawerToggle from '../../components/Navigation/DrawerToggle/DrawerToggle';
import classes from './Layout.module.css';

class Layout extends Component {
	state = {
		showSideDrawer: false
	};
	sideDrawerHandler = () => {
		this.setState((prevState) => {
			return { showSideDrawer: !prevState.showSideDrawer };
		});
	};
	hideSideDrawer = () => {
		this.setState({ showSideDrawer: false });
	};
	render() {
		return (
			<Aux className={classes.Layout}>
				<DrawerToggle opened={this.state.showSideDrawer} clicked={this.sideDrawerHandler} />
				<Toolbar goToCheckout={this.props.checkoutHandler} />
				<SideDrawer showed={this.state.showSideDrawer} clicked={this.hideSideDrawer} />
				<div className={classes.Main}>{this.props.children}</div>
			</Aux>
		);
	}
}

export default Layout;
