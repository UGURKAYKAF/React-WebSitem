import { Col } from "react-bootstrap";

export const ProjectCard = ({ baslik, imgUrl, githubLink }) => {
  return (
    <Col size={12} sm={6} md={3}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Img" className="img-fluid" />
        <div className="proj-txtx">
          <div>
            <h4>{baslik}</h4>
          </div>
          <div className="proj-githubLink">
            <span>Proje Linki: </span>
            <a href={githubLink} target="_blank" rel="noreferrer">Link</a>
          </div>
        </div>
      </div>
    </Col>
  )
}
