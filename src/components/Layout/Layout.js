import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import NavigationIcon from '../Navigation/NavigationIcon/NavigationIcon';
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
			<Aux>
				<NavigationIcon opened={this.state.showSideDrawer} clicked={this.sideDrawerHandler} />
				<Toolbar />
				<SideDrawer showed={this.state.showSideDrawer} clicked={this.hideSideDrawer} />
				<main>{this.props.children}</main>
			</Aux>
		);
	}
}

export default Layout;
