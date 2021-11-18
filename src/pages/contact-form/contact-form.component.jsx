import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.styles.css";

const ContactForm = () => {
	return (
		<div>
			<h1 className="pt-3 text-center font-details-b pb-3">CONTACTO</h1>
			<Jumbotron className="contact-jumbotron">
				<Row className="d-flex justify-content-center">
					<Col className="d-flex justify-content-center align-self-center flex-wrap">
						<div className="m-2">
							<a
								href="mailto:vdfbiz7@gmail.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button variant="outline-danger" title="vdfbiz7@gmail.com">
									<i className="fas fa-envelope-square"></i> Email
								</Button>
							</a>
						</div>
						<div className="m-2">
							<a
								href="https://www.linkedin.com/in/vdoradof/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button variant="outline-primary" title="Visit my LinkenIn">
									<i className="fab fa-linkedin"></i> LinkedIn
								</Button>
							</a>
						</div>
					</Col>
				</Row>
			</Jumbotron>
		</div>
	);
};

export default ContactForm;
