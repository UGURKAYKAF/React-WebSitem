import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const Contact = () => {
  const [buttonText, setButtonText] = useState('Send');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailjs.sendForm('service_6oepxuv', 'myWebSite', e.target, 'wc8hYZ4NZO05vGvq0')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    setButtonText("Send");
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Bana Ulaş</h2>
                  <Row>
                    <Col >
                      <h4>E-Mail Adresim: ugurkaykaf@gmail.com</h4>
                    </Col>
                  </Row>
                  <hr></hr>
                  <form onSubmit={handleSubmit} >
                    <Row className="pt-3">
                      <Col size={12} sm={6} className="px-1 ">
                        <input type="text" placeholder="First Name" name="firstName" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" placeholder="Last Name" name="lastName" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" placeholder="Email Address" name="email" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" placeholder="Phone No." name="phone" />
                      </Col >
                      <Col size={12} sm={12} className="px-1">
                        <input type="text" placeholder="Konu" name="subject" />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" placeholder="Message" name="message"></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                    </Row>
                  </form>
                  <hr />
                  <Row>
                    <Col></Col>
                    <Col size={12} sm={12} md={4}>
                      <div className="social-icon mt-3 pt-3">
                        <a href="https://www.linkedin.com/in/uğurkaykaf" target="_blank" rel="noreferrer">
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/UGURKAYKAF" target="_blank" rel="noreferrer">
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://twitter.com/ugurkaykaf" target="_blank" rel="noreferrer">
                          <FontAwesomeIcon icon={faTwitter} />
                        </a>
                      </div>
                    </Col>
                    <Col></Col>
                  </Row>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
