import React, { useEffect, useState } from 'react';
import TextLoop from 'react-text-loop';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import { getAbout } from './Calls';

function Intro() {
	const [
		about,
		setAbout,
	] = useState({});
	useEffect(async () => {
		// let mounted = true;
		// getAbout().then((items) => {
		// 	if (mounted) {
		// 		setAbout({ ...items.contact });
		// 		console.log(about);
		// 	}
		// });
		// return () => (mounted = false);
		const code = await getAbout();
		console.log('coded', code);
	}, []);
	return (
		<section
			className="section-hero section-hero-2 display-fit-screen overlay-image"
			style={{ backgroundImage: `url(/assets/images/hero/2-1.jpg)` }}
		>
			<div className="display-center">
				<Container className="container">
					<Row>
						<Col md={6} />
						<Col md={6}>
							<header className="el-heading el-heading-side">
								<p className="label">
									<span>Hello. I'm .</span>
								</p>
								<h1>
									I'm a{' '}
									<TextLoop>
										<span>Product Manager</span>
										{/* <span>Web Developer </span>
										<span>Web Designer </span> */}
									</TextLoop>
									<br />
									Based in .
								</h1>
							</header>
							<Link to="/home-2/about">
								<button type="button" className="button button-lg button-primary">
									<span className="wave" />
									<span className="text text-dark">Read More</span>
								</button>
							</Link>
							<Link to="//portfolio">
								<button type="button" className="button button-lg text-primary">
									<span className="text">My Portfolios</span>
								</button>
							</Link>
						</Col>
					</Row>
				</Container>
			</div>
		</section>
	);
}

export default Intro;
