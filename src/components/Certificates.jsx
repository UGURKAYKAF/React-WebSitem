import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { CertificatesCard } from "./CertificatesCard";
import colorSharp2 from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useEffect, useState } from "react";

export const Certificates = () => {
  const [data, setData] = useState([]);
  const [company, setCompany] = useState([]);

  useEffect(() => {
    fetch("./json/sertifika.json")
      .then(response => response.json())
      .then(data => {
        setData(data.sertifika);
        const uniqueLanguages = ["Tümü", ...Array.from(new Set(data.sertifika.map(sertifika => sertifika.verenKuruluş)))];
        setCompany(uniqueLanguages);
      });
  }, []);

  return (
    <section className="project" id="certificates">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>              
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  {/* <img lassName="background-image-left" src={colorSharp2} alt="Contact Us"/> */}
                  <h2>Certificates</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="0">
                    <Nav variant="pills" className="d-flex flex-row  mb-5 justify-content-center align-items-center" id="pills-tab">
                      {company.map((company, index) => (
                        <Nav.Item key={index}>
                          <Nav.Link eventKey={index} className="as">{company}</Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {company.map((company, index) => (
                        <Tab.Pane eventKey={index} key={index}>
                          <Row>
                            {company === "Tümü"
                              ? data.map((sertifika, index) => (
                                <CertificatesCard key={index} {...sertifika} />
                              ))
                              : data
                                .filter(sertifika => sertifika.verenKuruluş === company)
                                .map((sertifika, index) => (
                                  <CertificatesCard key={index} {...sertifika} />
                                ))}
                          </Row>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2} alt="Img"></img> */}
      {/* <img className="background-image-left" src={colorSharp2} alt="img" /> */}
      <img className="background-image-left" src={colorSharp2} alt="Img" />
      
    </section>
  )
}
