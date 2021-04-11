import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { getPortfolio } from './Calls';

// Components
import Headline from '../components/common/Headline';

const portfolio = [
	{
		name: 'All Works',
		items: [
			{
				title: 'Crearive Design',
				link: '/portfolio-details',
				subtitle: 'Web Design',
				image: '/assets/images/portfolio/1-1.jpg',
				thumbnail: '/assets/images/portfolio/1-1.jpg',
			},
			{
				title: 'Crearive Design',
				link: '/portfolio-details',
				subtitle: 'Web Design',
				image: '/assets/images/portfolio/1-2.jpg',
				thumbnail: '/assets/images/portfolio/1-2.jpg',
			},
			{
				title: 'Crearive Design',
				link: '/portfolio-details',
				subtitle: 'Web Design',
				image: '/assets/images/portfolio/1-3.jpg',
				thumbnail: '/assets/images/portfolio/1-3.jpg',
			},
			{
				title: 'Crearive Design',
				subtitle: 'Web Design',
				link: '/portfolio-details',
				image: '/assets/images/portfolio/1-4.jpg',
				thumbnail: '/assets/images/portfolio/1-4.jpg',
			},
			{
				title: 'Crearive Design',
				subtitle: 'Web Design',
				link: '/portfolio-details',
				image: '/assets/images/portfolio/1-5.jpg',
				thumbnail: '/assets/images/portfolio/1-5.jpg',
			},
			{
				title: 'Crearive Design',
				subtitle: 'Web Design',
				link: '/portfolio-details',
				image: '/assets/images/portfolio/1-6.jpg',
				thumbnail: '/assets/images/portfolio/1-6.jpg',
			},
			{
				title: 'Crearive Design',
				subtitle: 'Web Design',
				link: '/portfolio-details',
				image: '/assets/images/portfolio/1-7.jpg',
				thumbnail: '/assets/images/portfolio/1-7.jpg',
			},
			{
				title: 'Crearive Design',
				subtitle: 'Web Design',
				link: '/portfolio-details',
				image: '/assets/images/portfolio/1-8.jpg',
				thumbnail: '/assets/images/portfolio/1-8.jpg',
			},
		],
	},
	{
		name: 'Strength',
		items: [
			{
				title: 'Crearive Design',
				link: '/portfolio-details',
				subtitle: 'Web Design',
				image: '/assets/images/portfolio/1-1.jpg',
				thumbnail: '/assets/images/portfolio/1-1.jpg',
			},
			{
				title: 'Crearive Design',
				link: '/portfolio-details',
				subtitle: 'Web Design',
				image: '/assets/images/portfolio/1-2.jpg',
				thumbnail: '/assets/images/portfolio/1-2.jpg',
			},
			{
				title: 'Crearive Design',
				link: '/portfolio-details',
				subtitle: 'Web Design',
				image: '/assets/images/portfolio/1-3.jpg',
				thumbnail: '/assets/images/portfolio/1-3.jpg',
			},
		],
	},
	{
		name: 'Endurance',
		items: [
			{
				title: 'Crearive Design',
				subtitle: 'Web Design',
				link: '/portfolio-details',
				image: '/assets/images/portfolio/1-4.jpg',
				thumbnail: '/assets/images/portfolio/1-4.jpg',
			},
			{
				title: 'Crearive Design',
				subtitle: 'Web Design',
				link: '/portfolio-details',
				image: '/assets/images/portfolio/1-5.jpg',
				thumbnail: '/assets/images/portfolio/1-5.jpg',
			},
			{
				title: 'Crearive Design',
				subtitle: 'Web Design',
				link: '/portfolio-details',
				image: '/assets/images/portfolio/1-6.jpg',
				thumbnail: '/assets/images/portfolio/1-6.jpg',
			},
		],
	},
	{
		name: 'Cardio',
		items: [
			{
				title: 'Crearive Design',
				subtitle: 'Web Design',
				link: '/portfolio-details',
				image: '/assets/images/portfolio/1-7.jpg',
				thumbnail: '/assets/images/portfolio/1-7.jpg',
			},
			{
				title: 'Crearive Design',
				subtitle: 'Web Design',
				link: '/portfolio-details',
				image: '/assets/images/portfolio/1-8.jpg',
				thumbnail: '/assets/images/portfolio/1-8.jpg',
			},
			{
				title: 'Crearive Design',
				subtitle: 'Web Design',
				link: '/portfolio-details',
				image: '/assets/images/portfolio/1-9.jpg',
				thumbnail: '/assets/images/portfolio/1-9.jpg',
			},
		],
	},
];

function Portfolio() {
	const [
		port,
		setport,
	] = useState([]);
	useEffect(() => {
		let mounted = true;
		getPortfolio().then((items) => {
			if (mounted) {
				setport(items.portfolio);
			}
			console.log(items.portfolio);
		});

		return () => (mounted = false);
	}, []);
	return (
		<section className="section section-portfolio section-portfolio-2">
			<div className="display-spacing">
				<Container className="container">
					<Headline
						label="Portfolio"
						title="Let's See Our portfolio"
						divider_1={true}
						position="center"
					/>
					<Tabs className="el-tabs el-tabs-1" selectedTabClassName="active">
						<TabList className="el-tabs-links">
							{port.map((category, categoryIndex) => (
								<Tab key={category._id}>{category.categoryName}</Tab>
							))}
						</TabList>
						{port.map((category, categoryIndex) => (
							<TabPanel key={category._id}>
								<Row className="row-center mb--30">
									{/* {category.items.map((item, index) => ( */}
									<Col key={categoryIndex} xs={6} sm={6} md={6} lg={3} xl={3}>
										<div className="portfolio-item">
											<a taret="_blank" href={category.link}>
												<div className="portfolio-card">
													<div
														className="image overlay-image"
														style={{
															backgroundImage: `url(${category
																.images[0]})`,
														}}
													/>
													<div className="content">
														<span>{category.title}</span>
														{/* <h3>{item.subtitle}</h3> */}
													</div>
												</div>
											</a>
										</div>
									</Col>
									{/* ))} */}
								</Row>
							</TabPanel>
						))}
					</Tabs>
				</Container>
			</div>
		</section>
	);
}

export default Portfolio;
