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

export const ProjectCard = ({ baslik, aciklama, imgUrl }) => {
  // console.log(baslik);
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Img" />
        <div className="proj-txtx">
          <h4>{baslik}</h4>
          <span>{aciklama}</span>
          <div className="link">
            <a href={imgUrl}>link</a>
          </div>
        </div>
      </div>
    </Col>
  )
}
