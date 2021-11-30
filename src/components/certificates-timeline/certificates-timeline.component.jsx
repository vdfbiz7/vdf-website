import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "../../pages/studies/studies.styles.css";

// certificates
import L_FCE from "../../assets/img/certificates/fce.svg";
import L_TRINITY from "../../assets/img/certificates/trinity.svg";

import "./certificates-timeline.styles.css";

const TimeLine = () => {
	return (
		<div>
			<h1 className="pt-3 text-center font-details-b pb-3">CERTIFICACIONES</h1>
			<Timeline>
				<Events>
					{/* Coursera: Foundations of Project Management */}
					<ImageEvent
						date="04/8/2021"
						className="text-center"
						//text="Foundations of Project Management"
						//src={L_COURSERA}
						//alt="Foundations of Project Management"
					>
						<div className="d-flex justify-content-between flex-column mt-1">
							<Jumbotron className="jumbo-style">
								<Container>
									<Tilt options={{ max: 25 }}>
										<Card>
											<Card.Body className="d-flex justify-content-center flex-column">
												<div>
													<Card.Title className="text-center">
														Foundations of Project Management
													</Card.Title>
												</div>
												<div>
													<div className="text-center style">
														<strong
															className="body-title-style "
															style={{ color: "#2473FFD4" }}
														>
															Coursera
														</strong>
														<br />
														<br />
														ID de la credencial: QFNDRA94YLFL
														<br />
														<br />
														<UrlButton
															href="https://www.coursera.org/account/accomplishments/certificate/QFNDRA94YLFL"
															target="_blank"
														>
															URL de la credencial
														</UrlButton>
														<br />
													</div>
												</div>
											</Card.Body>
										</Card>
									</Tilt>
								</Container>
							</Jumbotron>
						</div>
					</ImageEvent>
					{/* FCE */}
					<ImageEvent date="10/8/2015" className="text-center">
						<div className="d-flex justify-content-between flex-column mt-1">
							<Jumbotron className="jumbo-style">
								<Container>
									<Tilt options={{ max: 25 }}>
										<Card>
											<Card.Body className="d-flex justify-content-center flex-column">
												<div>
													<Card.Title className="text-center">
														B2 First (FCE) Certificate in English
													</Card.Title>
												</div>
												<br />
												<div>
													<Card.Img
														variant="top"
														className="img-resize"
														src={L_FCE}
														alt="Cambridge"
													/>
												</div>
												<div>
													<div className="text-center style">
														<br />
														<strong
															className="body-title-style "
															style={{ color: "#2473FFD4" }}
														>
															Cambridge Assessment English
														</strong>
														<br />
														<br />
														ID de la credencial: 158ES4392019
														<br />
														<br />
														<UrlButton
															href="https://www.linkedin.com/company/cambridge-assessment-english/"
															target="_blank"
														>
															Cambridge Assessment English
														</UrlButton>
														<br />
													</div>
												</div>
											</Card.Body>
										</Card>
									</Tilt>
								</Container>
							</Jumbotron>
						</div>
					</ImageEvent>
					<ImageEvent date="15/7/2011" className="text-center">
						<div className="d-flex justify-content-between flex-column mt-1">
							<Jumbotron className="jumbo-style">
								<Container>
									<Tilt options={{ max: 25 }}>
										<Card>
											<Card.Body className="d-flex justify-content-center flex-column">
												<div>
													<Card.Title className="text-center">
														Graded Examination in Spoken English
													</Card.Title>
												</div>
												<br />
												<div>
													<Card.Img
														variant="top"
														className="img-resize"
														src={L_TRINITY}
														alt="Cambridge"
													/>
												</div>
												<div>
													<div className="text-center style">
														<br />
														<strong
															className="body-title-style "
															style={{ color: "#2473FFD4" }}
														>
															Trinity College London
														</strong>
														<br />
														<br />
														Grade: 5
														<br />
														<br />
														<UrlButton
															href="https://www.trinitycollege.com/"
															target="_blank"
														>
															Trinity College London
														</UrlButton>
														<br />
													</div>
												</div>
											</Card.Body>
										</Card>
									</Tilt>
								</Container>
							</Jumbotron>
						</div>
					</ImageEvent>
				</Events>
			</Timeline>
		</div>
	);
};

export default TimeLine;
