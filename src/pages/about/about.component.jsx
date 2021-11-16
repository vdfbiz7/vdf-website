import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
	return (
		<div>
			<div className="about">
				<h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
				<Container>
					<Row className="pt-3 pb-5 align-items-center">
						<Col xs={12} md={6}>
							<Row className="justify-content-center mb-2">
								<Image
									className="profile justify-content-end"
									alt="profile"
									src={Profile}
									thumbnail
									fluid
								/>
							</Row>
						</Col>
						<Col xs={12} md={6}>
							<Row className=" align-items-start p-2 my-details rounded">
								Hi there! I am <strong>&nbsp;Víctor Dorado Fernández</strong>
								<br />
								Graduated engineer in telecommunications systems, with a
								master's degree in telecommunications application and
								management.
								<br />
								With training and interests focused on areas such as: IoT, Big
								Data, Wireless or software development.
								<br />
								With the experience of having worked so much in companies
								multinationals as well as small companies providing me with each
								of these a different vision of the professional world, as well
								as good communication skills for the public.
								<br /> <br />
								<Col className="d-flex justify-content-center flex-wrap">
									<div>
										<a href="#contact">
											<Button className="m-2" variant="outline-primary">
												Let's talk
											</Button>
										</a>
									</div>
									<div>
										<a
											href="https://drive.google.com/file/d/19MTGCh_GhwlnweEmabh4eTSRyWMPjKVd/view?usp=sharing"
											target="_blank"
											rel="noopener noreferrer"
										>
											<Button className="m-2" variant="outline-success">
												My CV
											</Button>
										</a>
									</div>
									<div>
										<a
											href="https://www.linkedin.com/in/vdoradof/"
											target="_blank"
											rel="noopener noreferrer"
										>
											<Button className="m-2" variant="outline-info">
												LinkedIn
											</Button>
										</a>
									</div>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default About;
