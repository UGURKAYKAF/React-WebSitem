// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import colorSharp from "../assets/img/color-sharp.png"

// export const Skills = () => {
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };

//   return (
//     <section className="skill" id="skills">
//         <div className="container">
//             <div className="row">
//                 <div className="col-12">
//                     <div className="skill-bx wow zoomIn">
//                         <h2>Skills</h2>
//                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
//                         <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
//                             <div className="item">
//                                 <img src={meter1} alt="img" />
//                                 <h5>Web Development</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter2} alt="img" />
//                                 <h5>Brand Identity</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter3} alt="img" />
//                                 <h5>Logo Design</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter1} alt="img" />
//                                 <h5>Web Development</h5>
//                             </div>
//                         </Carousel>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <img className="background-image-left" src={colorSharp} alt="img" />
//     </section>
//   )
// }




import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import React, { useEffect, useRef, useState } from 'react';

export const Skills = () => {

  const AnimatedProgressBar = ({ percentage, color }) => {
    const progressBarRef = useRef(null);

    useEffect(() => {
      const progressBar = progressBarRef.current;
      progressBar.style.width = `${percentage}%`;
    }, [percentage]);

    return (
      <div className="progress" role="progressbar" aria-label="Basic example">
        <div
          ref={progressBarRef}
          className={`progress-bar ${color}`}
          style={{ width: '0%' }}
        ></div>
      </div>
    );
  };


  const [progressBars] = useState([
    { id: 1, name: 'C', percentage: 85, color: 'bg-danger' },
    { id: 2, name: 'C#', percentage: 60, color: 'bg-secondary' },
    { id: 3, name: 'Java', percentage: 75, color: 'bg-success' },
    { id: 4, name: 'Python', percentage: 50, color: 'bg-primary' },
    { id: 5, name: 'PHP', percentage: 60, color: 'bg-warning' },
    { id: 6, name: 'PHP - Laravel', percentage: 30, color: 'bg-info' },
  ]);

  const [progressBars2] = useState([
    { id: 7, name: 'HTML 5', percentage: 90, color: 'bg-info' },
    { id: 8, name: 'CSS 3', percentage: 75, color: 'bg-warning' },
    { id: 9, name: 'CSS - Bootstrap 5', percentage: 70, color: 'bg-danger' },
    { id: 10, name: 'JavaScript', percentage: 60, color: 'bg-secondary' },
    { id: 11, name: 'ReactJS', percentage: 40, color: 'bg-primary' },
    { id: 12, name: 'SQL', percentage: 55, color: 'bg-success' },
  ]);

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="mb-4">
                    {progressBars.map(bar => (
                      <div key={bar.id} className='p-2'>
                        <div className="d-flex justify-content-between">
                          <h6 className="font-weight-bold">{bar.name}</h6>
                          <h6 className="font-weight-bold">{bar.percentage}</h6>
                        </div>
                        <AnimatedProgressBar percentage={bar.percentage} color={bar.color} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-4">
                    {progressBars2.map(bar => (
                      <div key={bar.id} className='p-2'>
                        <div className="d-flex justify-content-between">
                          <h6 className="font-weight-bold">{bar.name}</h6>
                          <h6 className="font-weight-bold">{bar.percentage}</h6>
                        </div>
                        <AnimatedProgressBar percentage={bar.percentage} color={bar.color} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="img" />
    </section>
  )
}
