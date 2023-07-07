import { Col } from "react-bootstrap";


export const ProjectCard = ({ baslik, imgUrl, githubLink }) => {
  return (
    // <Col size={12} sm={6} md={3}>
    //   <div className="proj-imgbx">
    //     <img src={imgUrl} alt="Img" className="img-fluid" />
    //     <div className="proj-txtx">
    //       <div>
    //         <h4>{baslik}</h4>
    //       </div>
    //       <div className="proj-githubLink">
    //         <span>Proje Linki: </span>
    //         <a href={githubLink} target="_blank" rel="noreferrer">Link</a>
    //       </div>
    //     </div>
    //   </div>
    // </Col>

    <Col size={12} sm={5} md={3} lg={2}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Img" className="img-fluid" />
        <div className="proj-txtx">
          <div>
            <h5>{baslik}</h5>
          </div>
          <div className="proj-githubLink">
            {/* <span>Proje Linki: </span>
            <a href={githubLink} target="_blank" rel="noreferrer">Link</a> */}
            <a class="btn btn-lg-square btn-outline-danger text-opacity-25 border-2 mx-1"
              href={githubLink} target="_blank"  rel="noreferrer"><i
                class="">Proje Linki</i></a>
          </div>
        </div>
      </div>
    </Col>


    // <Col md={6} lg={4} className="portfolio-item">
    //   <div className="portfolio-img">
    //     <img src={imgUrl} alt="Img" className="img-projects" />
    //   </div>

    // </Col>

  )
}
