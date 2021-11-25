import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_UPC from "../../assets/img/studies/upc.svg";
import Tilt from "react-tilt";
import "./studies.styles.css";

const Studies = () => {
	return (
		<div>
			<h1 className="pt-3 text-center font-details-b pb-3">ESTUDIOS</h1>
			{/* MASTER */}
			<Jumbotron className="jumbo-style">
				<Container>
					<Tilt options={{ max: 25 }}>
						<Card>
							<Card.Header
								as="h5"
								className="d-flex justify-content-center flex-wrap"
							>
								<Card.Img
									variant="top"
									className="img-resize"
									src={L_UPC}
									alt="Deloitte logo"
								/>
							</Card.Header>
							<Card.Body className="d-flex justify-content-center flex-column">
								<div>
									<Card.Title className="text-center">
										Master's degree in Applied Telecommunications and
										Engineering Management (MASTEAM)
									</Card.Title>
								</div>
								<div>
									<div className="text-center style">
										<strong className="body-title-style ">
											Universitat Politècnica de Catalunya
										</strong>
										<br />
										Escuela de Ingeniería de Telecomunicación y Aeroespacial de
										Castelldefels (EETAC)
										<br />
										2019 - 2020
										<br />
									</div>
								</div>
							</Card.Body>
						</Card>
					</Tilt>
				</Container>
			</Jumbotron>

			{/* Carrera */}
			<Jumbotron className="jumbo-style">
				<Container>
					<Tilt options={{ max: 25 }}>
						<Card>
							<Card.Header
								as="h5"
								className="d-flex justify-content-center flex-wrap"
							>
								<Card.Img
									variant="top"
									className="img-resize"
									src={L_UPC}
									alt="Deloitte logo"
								/>
							</Card.Header>
							<Card.Body className="d-flex justify-content-center flex-column">
								<div>
									<Card.Title className="text-center">
										Grado en Ingeniería de Sistemas de Telecomunicación
									</Card.Title>
								</div>
								<div>
									<div className="text-center style">
										<strong className="body-title-style ">
											Universitat Politècnica de Catalunya
										</strong>
										<br />
										Escuela de Ingeniería de Telecomunicación y Aeroespacial de
										Castelldefels (EETAC)
										<br />
										2015 - 2019
										<br />
									</div>
								</div>
							</Card.Body>
						</Card>
					</Tilt>
				</Container>
			</Jumbotron>
		</div>
	);
};

export default Studies;
