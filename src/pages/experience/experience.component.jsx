import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_HEDYLA from "../../assets/img/experience/hedyla.svg";
import L_PWC from "../../assets/img/experience/pwc.svg";
import L_ANPANE from "../../assets/img/experience/anpane.svg";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
	return (
		<div>
			<h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCIA</h1>
			{/* Hedyla */}
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
									src={L_HEDYLA}
									alt="Hedyla logo"
								/>
							</Card.Header>
							<Card.Body className="d-flex justify-content-center flex-column">
								<div>
									<Card.Title className="text-center">
										AI Software engineer
									</Card.Title>
								</div>
								<div>
									<div className="text-center style">
										<strong className="body-title-style ">Hedyla</strong>
										<br />
										<strong>Tecnología:</strong> Scala, Node.js, Python, Spring,
										Elasticsearch, Kibana AWS, Docker, Jenkins.
										<br />
										<strong>Duración:</strong> Enero 2021 - Presente
										<br />
										<strong> Descripción </strong>
										<ul className="text-left">
											<li>
												Desarrollo del producto centrado en operations research.
											</li>
											<li>
												Cración funcionalidades que sean aplicables en el mundo
												real.
											</li>
											<li>
												Gestión de los proyectos desde los pilotos hasta la
												salida a producción.
											</li>
										</ul>
									</div>
								</div>
							</Card.Body>
						</Card>
					</Tilt>
				</Container>
			</Jumbotron>

			{/* PWC */}
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
									src={L_PWC}
									alt="PWC logo"
								/>
							</Card.Header>
							<Card.Body className="d-flex justify-content-center flex-column">
								<div>
									<Card.Title className="text-center">
										Prácticas en el área de Sistem Process Audit
									</Card.Title>
								</div>
								<div>
									<div className="text-center style">
										<strong className="body-title-style ">PwC</strong>
										<br />
										<strong>Tecnología:</strong> Python, ACL, Aura
										<br />
										<strong>Duracion:</strong> Febrero 2019 - June 2019
										<br />
										<strong> Descripción </strong>
										<ul className="text-left">
											<li>
												Tratamiento masivo de datos (Data Assurance y Data
												Analytics).
											</li>
											<li>
												Realización de revisiones de controles generales
												informáticos en entornos tecnológicos complejos.
											</li>
											<li>
												Implantación y evaluación de los controles de IT y de
												diferentes procesos de negocio; tratamiento masivo de
												datos (Data Assurance y Data Analytics).
											</li>
										</ul>
									</div>
								</div>
							</Card.Body>
						</Card>
					</Tilt>
				</Container>
			</Jumbotron>

			{/* Anpane telecom */}
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
									src={L_ANPANE}
									alt="Accenture logo"
								/>
							</Card.Header>
							<Card.Body className="d-flex justify-content-center flex-column">
								<div>
									<Card.Title className="text-center">
										Practicas project manager y diseñador FTTH
									</Card.Title>
								</div>
								<div>
									<div className="text-center style">
										<strong className="body-title-style ">
											Anpane Telecom
										</strong>
										<br />
										<strong>Tecnología:</strong> APX-GIS
										<br />
										<strong>Duración:</strong> Junio 2018 - Septiembre 2021
										<br />
										<strong> Descripción </strong>
										<ul className="text-left">
											<li>Diseño de nuevas instalaciones de FTTH.</li>
											<li>
												Gestion de los recursos y presupuesto de la instalación.
											</li>
											<li>
												Analisis y informe de la post producción del proyecto.
											</li>
										</ul>
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

export default Experience;
