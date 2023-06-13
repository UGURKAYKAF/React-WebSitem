// import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import contactImg from "../assets/img/contact-img.svg";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const Contact = () => {
//   const formInitialDetails = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: ''
//   }
//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState('Send');
//   const [status, setStatus] = useState({});

//   const onFormUpdate = (category, value) => {
//       setFormDetails({
//         ...formDetails,
//         [category]: value
//       })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setButtonText("Sending...");
//     let response = await fetch("http://localhost:5000/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify(formDetails),
//     });
//     setButtonText("Send");
//     let result = await response.json();
//     setFormDetails(formInitialDetails);
//     if (result.code == 200) {
//       setStatus({ succes: true, message: 'Message sent successfully'});
//     } else {
//       setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
//     }
//   };

//   return (
//     <section className="contact" id="connect">
//       <Container>
//         <Row className="align-items-center">
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
//               }
//             </TrackVisibility>
//           </Col>
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                 <h2>Get In Touch</h2>
//                 <form onSubmit={handleSubmit}>
//                   <Row>
//                     <Col size={12} sm={6} className="px-1">
//                       <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
//                     </Col>
//                     <Col size={12} sm={6} className="px-1">
//                       <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
//                     </Col>
//                     <Col size={12} sm={6} className="px-1">
//                       <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
//                     </Col>
//                     <Col size={12} sm={6} className="px-1">
//                       <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
//                     </Col>
//                     <Col size={12} className="px-1">
//                       <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
//                       <button type="submit"><span>{buttonText}</span></button>
//                     </Col>
//                     {
//                       status.message &&
//                       <Col>
//                         <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
//                       </Col>
//                     }
//                   </Row>
//                 </form>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   )
// }




import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

// import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const Contact = () => {
  // const formInitialDetails = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   phone: '',
  //   message: ''
  // }
  // const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  // const [status, setStatus] = useState({});

  // const onFormUpdate = (category, value) => {
  //   setFormDetails({
  //     ...formDetails,
  //     [category]: value
  //   })
  // }

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
    // let result = await response.json();
    // setFormDetails(formInitialDetails);
    // if (result.code === 200) {
    //   setStatus({ succes: true, message: 'Message sent successfully' });
    // } else {
    //   setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
    // }
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
                    <Col>
                      <h4>Telefon Numaram:</h4>
                      <h5>+90 531 833 42 43</h5>
                    </Col>
                    <Col >
                      <h4>E-Mail Adresim:</h4>
                      <h5>ugurkaykaf@gmail.com</h5>
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
                      {/* {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      } */}
                    </Row>
                  </form>
                  <hr />
                  <Row>
                    <Col></Col>
                    <Col size={12} sm={12} md={4}>
                      {/* <div className="social-icon mt-3 pt-3">
                        <a href="https://www.linkedin.com/in/uğurkaykaf/"><img src={navIcon1} alt="Icon" /></a>
                        <a href="https://github.com/UGURKAYKAF"><img src={navIcon2} alt="Icon" /></a>
                        <a href="https://twitter.com/ugurkaykaf"><img src={navIcon3} alt="Icon" /></a>
                      </div> */}
                      <div className="social-icon mt-3 pt-3">
                        <a href="https://www.linkedin.com/in/uğurkaykaf">
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/UGURKAYKAF">
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://twitter.com/ugurkaykaf">
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
