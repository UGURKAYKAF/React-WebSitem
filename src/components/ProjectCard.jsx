// import { Col } from "react-bootstrap";

// export const ProjectCard = ({ title, description, imgUrl }) => {
//   return (
//     <Col size={12} sm={6} md={4}>
//       <div className="proj-imgbx">
//         <img src={imgUrl} />
//         <div className="proj-txtx">
//           <h4>{title}</h4>
//           <span>{description}</span>
//         </div>
//       </div>
//     </Col>
//   )
// }




import { Col } from "react-bootstrap";

export const ProjectCard = ({ baslik, imgUrl, githubLink }) => {
  // console.log(baslik);
  return (
    <Col size={12} sm={6} md={3}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Img" />
        <div className="proj-txtx">
          <div>
            <h4>{baslik}</h4>
          </div>
          {/* <div className="proj-link">
            <a href={imgUrl}>link</a>
          </div> */}
          <div className="proj-githubLink">
            <span>Proje Linki: </span>
            <a href={githubLink}>Link</a>
          </div>
        </div>
      </div>
    </Col>
  )
}
