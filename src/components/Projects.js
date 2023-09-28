import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/satis.png";
import projImg2 from "../assets/img/face.png";
import projImg3 from "../assets/img/wordle.JPEG";
import projImg4 from "../assets/img/eztip.JPEG";
import projImg5 from "../assets/img/sono.JPEG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import p1Image from "../assets/img/p1.JPG";
import p2Image from "../assets/img/p2.JPG";
import p3Image from "../assets/img/p3.JPG";
import p7Image from "../assets/img/p4.JPG";
import p5Image from "../assets/img/p5.JPG";
import p6Image from "../assets/img/p6.jpg";
import p4Image from "../assets/img/p7.jpg";
import p8Image from "../assets/img/p8.jpg";
import r1Image from "../assets/img/r1.JPG"
import r2Image from "../assets/img/r2.JPG"
import r3Image from "../assets/img/r3.JPG"
import r4Image from "../assets/img/r4.jpeg"
import r5Image from "../assets/img/r5.JPG"
import r6Image from "../assets/img/r6.JPG"

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Satisfaction Detector",
      description: "Business, Data, and Machine Learning",
      imgUrl: projImg1,
      githubLink: "https://github.com/SayokBose/SatisfactionDetector",
    },
    {
      title: "Face Identifier",
      description: "Computer Vision",
      imgUrl: projImg2,
      githubLink: "https://github.com/SayokBose/facialComparer",
    },
    {
      title: "Wordle",
      description: "Data Structures and OOP",
      imgUrl: projImg3,
    },
    {
      title: "EzTip",
      description: "Web Development",
      imgUrl: projImg4,
      githubLink: "https://github.com/SayokBose/eztip.github.io",
    },
    {
      title: "DataScraper (Sonomatic)",
      description: "Data Analysis",
      imgUrl: projImg5,
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>What I do</h2>
                <p>I enjoy coding. On my resume, you can find out more about my specific projects. Outside of coding, I enjoy painting figurative abstract paintings. Furthermore, I enjoy tutoring and volunteering at summer camps.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Art</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Random</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                      <Col xs={12} md={6} lg={3}>
                        <img src={p1Image} alt="Image 1" className= "image"/>
                      </Col>
                      <Col xs={12} md={6} lg={3}>
                        <img src={p2Image} alt="Image 2" className= "image"/>
                      </Col>
                      <Col xs={12} md={6} lg={3}>
                        <img src={p3Image} alt="Image 3" className= "image"/>
                      </Col>
                      <Col xs={12} md={6} lg={3}>
                        <img src={p4Image} alt="Image 4"className= "image" />
                      </Col>
                      <Col xs={12} md={6} lg={3}>
                        <img src={p5Image} alt="Image 5" className= "image"/>
                      </Col>
                      <Col xs={12} md={6} lg={3}>
                        <img src={p6Image} alt="Image 6" className= "image"/>
                      </Col>
                      <Col xs={12} md={6} lg={3}>
                        <img src={p7Image} alt="Image 7" className= "image"/>
                      </Col>
                      <Col xs={12} md={6} lg={3}>
                        <img src={p8Image} alt="Image 8" className= "image"/>
                      </Col>
                    </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                      <Col xs={12} md={6} lg={4}>
                        <img src={r1Image} alt="Image 1" className= "image"/>
                      </Col>
                      <Col xs={12} md={6} lg={4}>
                        <img src={r2Image} alt="Image 2" className= "image"/>
                      </Col>
                      <Col xs={12} md={6} lg={4}>
                        <img src={r3Image} alt="Image 3" className= "image"/>
                      </Col>
                      <Col xs={12} md={6} lg={4}>
                        <img src={r4Image} alt="Image 4" className= "image"/>
                      </Col>
                      <Col xs={12} md={6} lg={4}>
                        <img src={r5Image} alt="Image 5" className= "image"/>
                      </Col>
                      <Col xs={12} md={6} lg={4}>
                        <img src={r6Image} alt="Image 6" className= "image"/>
                      </Col>
                    </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
