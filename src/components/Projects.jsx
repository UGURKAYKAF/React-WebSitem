import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useEffect, useState } from "react";

export const Projects = () => {
  const [data, setData] = useState([]);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    fetch("./json/proje.json")
      .then(response => response.json())
      .then(data => {
        setData(data.proje);
        const uniqueLanguages = ["Tümü", ...Array.from(new Set(data.proje.map(project => project.dil)))];
        setLanguages(uniqueLanguages);
      });
  }, []);

  return (
    <section className="project" id="projects">
      <Container className="container-xxl ">
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projelerim</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="0">
                    <Nav variant="pills" className="d-flex flex-row  mb-5 justify-content-center align-items-center" id="pills-tab">
                      {languages.map((language, index) => (
                        <Nav.Item key={index}>
                          <Nav.Link eventKey={index} className="as">{language}</Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {languages.map((language, index) => (
                        <Tab.Pane eventKey={index} key={index}>
                          <Row className="g-4">
                            {language === "Tümü"
                              ? data.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                              ))
                              : data
                                .filter(project => project.dil === language)
                                .map((project, index) => (
                                  <ProjectCard key={index} {...project} />
                                ))
                            }
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
      <img className="background-image-right" src={colorSharp2} alt="Img" />
    </section>
  )
}

