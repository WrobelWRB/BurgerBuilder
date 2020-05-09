import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<BrowserRouter basename="/BurgerBuilder">
				<Layout>
					<Switch>
						<Route path="/checkout" component={Checkout} />
						<Route path="/" exact component={BurgerBuilder} />
					</Switch>
				</Layout>
			</BrowserRouter>
		);
	}
}

export default App;