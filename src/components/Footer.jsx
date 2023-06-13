
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
// import { Link } from "react-router-dom";



export const Footer = () => {
  return (
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <Col size={12} sm={6}>
              <h1>UĞUR KAYKAF</h1>
              {/* <Link to="/adminlogin" className="linkStyle"><h1>UĞUR KAYKAF</h1></Link> */}
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon mt-3">
                <a href="https://www.linkedin.com/in/uğurkaykaf/"><img src={navIcon1} alt="Icon" /></a>
                <a href="https://github.com/UGURKAYKAF"><img src={navIcon2} alt="Icon" /></a>
                <a href="https://twitter.com/ugurkaykaf"><img src={navIcon3} alt="Icon" /></a>
              </div>
              <p>Copyright 2023. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
  )
}


// import { Container, Row, Col } from "react-bootstrap";
// import { Routes, Route, Link } from 'react-router-dom';
// import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";
// import { Admin } from "./Admin";

// export const Footer = () => {
//   return (
//     <Routes>
//       <footer className="footer">
//         <Container>
//           <Row className="align-items-center">
//             <Col size={12} sm={6}>
//               <Link to="/admin"><h1>UĞUR KAYKAF</h1></Link>
//             </Col>
//             <Col size={12} sm={6} className="text-center text-sm-end">
//               <div className="social-icon">
//                 <a href="https://www.linkedin.com/in/uğurkaykaf/"><img src={navIcon1} alt="Icon" /></a>
//                 <a href="https://github.com/UGURKAYKAF"><img src={navIcon2} alt="Icon" /></a>
//                 <a href="https://twitter.com/ugurkaykaf"><img src={navIcon3} alt="Icon" /></a>
//               </div>
//               <p>Copyright 2023. All Rights Reserved</p>
//             </Col>
//           </Row>
//         </Container>
//         <Route path="/admin" element={<Admin />} />
//       </footer>
//     </Routes>
//   )
// }
