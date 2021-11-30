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
				<h1 className="pt-3 text-center font-details pb-3">SOBRE MÍ</h1>
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
								¡Hola! Soy <strong>&nbsp;Víctor Dorado Fernández</strong>
								<br />
								Ingeniero graduado en sistemas de telecomunicaciones, con un
								máster en aplicación y gestión de las telecomunicaciones.
								<br />
								Con una formación e intereses enfocados en ámbitos como: IoT,
								desarrollo de software, Big Data o Wireless.
								<br />
								<br />
								Con la experiencia de haber trabajado tanto en compañías
								multinacionales como en start-up aportándome cada una de estas
								un visión diferente del mundo profesional.
								<br />
								<br />
								¡Bienvenidos a mi portfolio!
								<br /> <br />
								<Col className="d-flex justify-content-center flex-wrap">
									<div>
										<a href="#contact">
											<Button className="m-2" variant="outline-primary">
												Contacta conmigo
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
