import React, { useEffect } from 'react';
import { Route, useRouteMatch, HashRouter } from 'react-router-dom';

import './index.scss';

// Sections
import Blog from '../src/scenes/Blog';
import About from '../src/scenes/About';
import Intro from '../src/scenes/Intro';
import Header from '../src/scenes/Header';
import Service from '../src/scenes/Service';
import Contact from '../src/scenes/Contact';
import Portfolio from '../src/scenes/Portfolio';
import SinglePost from '../src/scenes/SinglePost';
import PortfolioDetails from '../src/scenes/PortfolioDetails';

// Components
import Helmet from '../src/components/common/Helmet';
import Switch from '../src/components/common/Switch';
import RedirectAs404 from '../src/components/common/RedirectAs404';

const routes = [
	{
		path: '/',
		component: <Intro />,
	},
	{
		path: '/intro',
		component: <Intro />,
	},
	{
		path: '/about',
		component: <About />,
	},
	{
		path: '/service',
		component: <Service />,
	},
	{
		path: '/portfolio',
		component: <Portfolio />,
	},
	{
		path: '/portfolio-details',
		component: <PortfolioDetails />,
	},
	{
		path: '/blog',
		component: <Blog />,
	},
	{
		path: '/single-post',
		component: <SinglePost />,
	},
	{
		path: '/contact',
		component: <Contact />,
	},
];

function App() {
	let { path } = useRouteMatch();

	useEffect(() => {
		document.documentElement.className = 'home-2 skin-2';
		return () => {
			document.documentElement.className = '';
		};
	});

	return (
		<div>
			<Helmet title="Nonso Ikenwa" />
			<Header />
			<Switch>
				{routes.map((item, index) => (
					<Route key={index} path={`${path}${item.path}`} exact>
						{item.component}
					</Route>
				))}
				<Route component={RedirectAs404} />
			</Switch>
		</div>
	);
}

export default App;
