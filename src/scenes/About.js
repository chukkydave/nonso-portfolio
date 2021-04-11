import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { getEducation, getExperience } from './Calls';

// Components
import Icon from '../components/common/Icon';

function About() {
	const [
		education,
		seteducation,
	] = useState([]);
	const [
		experience,
		setexperience,
	] = useState([]);
	useEffect(() => {
		let mounted = true;
		getEducation().then((items) => {
			if (mounted) {
				seteducation(items.education);
			}
		});
		getExperience().then((items) => {
			if (mounted) {
				setexperience(items.experience);
			}
		});
		return () => (mounted = false);
	}, []);
	return (
		<section className="section section-about section-about-2">
			<div className="section-resume section-resume-1 my-resume">
				<div className="display-spacing">
					<Container className="container">
						<div className="box">
							<Row nogutter>
								<Col xs={12} sm={12} md={12} lg={12} xl={6} className="bg-light">
									<div className="inner">
										<div className="resume-row resume-dark">
											<h4 className="resume-title">Education</h4>
											<ul>
												{education.map((item) => (
													<li key={item._id}>
														<div className="resume-item">
															<div className="resume-head">
																<Icon
																	title={item.school}
																	subtitle="Duration:"
																	small={item.duration}
																>
																	<span className="ti-medall" />
																</Icon>
															</div>
															<div className="resume-body">
																<p>{item.description}</p>
															</div>
														</div>
													</li>
												))}
											</ul>
										</div>
									</div>
								</Col>
								<Col xs={12} sm={12} md={12} lg={12} xl={6} className="bg-light">
									<div className="inner">
										<div className="resume-row resume-dark">
											<h4 className="resume-title">Experience</h4>
											<ul>
												{experience.map((item) => (
													<li key={item._id}>
														<div className="resume-item">
															<div className="resume-head">
																<Icon
																	title={item.PlaceOfWork}
																	subtitle="Duration:"
																	className="el-icon-dark"
																	small={item.duration}
																>
																	<span className="ti-briefcase" />
																</Icon>
															</div>
															<div className="resume-body">
																<p>{item.description}</p>
															</div>
														</div>
													</li>
												))}
											</ul>
										</div>
									</div>
								</Col>
							</Row>
						</div>
					</Container>
				</div>
			</div>
		</section>
	);
}

export default About;
